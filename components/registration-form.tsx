"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"

interface RegistrationFormProps {
  ticketType: string
  ticketPrice: number
  onCancel: () => void
}

export default function RegistrationForm({ ticketType, ticketPrice, onCancel }: RegistrationFormProps) {
  const { toast } = useToast()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    country: "",
    participationType: "visitor",
    message: "",
    acceptTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, participationType: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, acceptTerms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate a unique ticket ID
    const ticketId = `SIDI-${Date.now().toString(36).toUpperCase()}`

    // Store ticket data in localStorage (in a real app, this would be stored in a database)
    const ticketData = {
      ticketId,
      ticketType,
      ticketPrice,
      purchaseDate: new Date().toISOString(),
      attendee: {
        name: `${formState.firstName} ${formState.lastName}`,
        email: formState.email,
        company: formState.company,
        position: formState.position,
      },
    }

    localStorage.setItem(`ticket_${ticketId}`, JSON.stringify(ticketData))

    setIsSubmitting(false)
    toast({
      title: "Inscription réussie !",
      description: "Votre inscription a été enregistrée avec succès.",
      variant: "success",
    })

    // Redirect to the ticket confirmation page
    router.push(`/participer/confirmation?ticketId=${ticketId}`)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Formulaire d'inscription</h2>
        <div className="text-right">
          <p className="text-sm text-gray-500">Type de billet</p>
          <p className="font-bold text-primary">
            {ticketType} - {ticketPrice}€
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom *
            </label>
            <Input id="firstName" name="firstName" value={formState.firstName} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Nom *
            </label>
            <Input id="lastName" name="lastName" value={formState.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Téléphone *
            </label>
            <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} required />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Entreprise / Organisation *
            </label>
            <Input id="company" name="company" value={formState.company} onChange={handleChange} required />
          </div>

          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
              Fonction *
            </label>
            <Input id="position" name="position" value={formState.position} onChange={handleChange} required />
          </div>
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
            Pays *
          </label>
          <Select value={formState.country} onValueChange={(value) => handleSelectChange("country", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez votre pays" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="france">France</SelectItem>
              <SelectItem value="senegal">Sénégal</SelectItem>
              <SelectItem value="benin">Bénin</SelectItem>
              <SelectItem value="burkina">Burkina Faso</SelectItem>
              <SelectItem value="cote-ivoire">Côte d'Ivoire</SelectItem>
              <SelectItem value="gabon">Gabon</SelectItem>
              <SelectItem value="mali">Mali</SelectItem>
              <SelectItem value="niger">Niger</SelectItem>
              <SelectItem value="congo">République du Congo</SelectItem>
              <SelectItem value="rdc">RDC</SelectItem>
              <SelectItem value="rwanda">Rwanda</SelectItem>
              <SelectItem value="tchad">Tchad</SelectItem>
              <SelectItem value="togo">Togo</SelectItem>
              <SelectItem value="cameroun">Cameroun</SelectItem>
              <SelectItem value="autre">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Type de participation *</label>
          <RadioGroup
            value={formState.participationType}
            onValueChange={handleRadioChange}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="visitor" id="visitor" />
              <Label htmlFor="visitor">Visiteur</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="exhibitor" id="exhibitor" />
              <Label htmlFor="exhibitor">Exposant</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="speaker" id="speaker" />
              <Label htmlFor="speaker">Intervenant</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="investor" id="investor" />
              <Label htmlFor="investor">Investisseur</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="media" id="media" />
              <Label htmlFor="media">Média</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (facultatif)
          </label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Informations complémentaires ou questions"
            rows={4}
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="acceptTerms" checked={formState.acceptTerms} onCheckedChange={handleCheckboxChange} required />
          <label htmlFor="acceptTerms" className="text-sm text-gray-700">
            J'accepte les conditions générales et la politique de confidentialité du Salon SIDI Invest For Africa *
          </label>
        </div>

        <div className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Annuler
          </Button>
          <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? "Traitement en cours..." : "Finaliser l'inscription"}
          </Button>
        </div>
      </form>
    </div>
  )
}
