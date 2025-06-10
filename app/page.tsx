"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Clock, Settings, Mail, Phone } from "lucide-react"

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20"
        >
          

          {/* Maintenance Icon */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="mb-6"
          >
            <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
              <Settings className="w-10 h-10 text-blue-900" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Site en Maintenance
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-blue-100 mb-8"
          >
            Nous effectuons actuellement des améliorations de sécurité sur notre site
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-blue-100 mb-8 space-y-4"
          >
            <p className="text-lg">
              Notre équipe technique travaille pour vous offrir une expérience encore meilleure et plus sécurisée.
            </p>
            <div className="flex items-center justify-center gap-2 text-yellow-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Retour prévu sous peu</span>
            </div>
          </motion.div>

          


          {/* Loading Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mt-8"
          >
            <div className="flex justify-center space-x-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-blue-200 text-sm">© 2024 SIDI Invest Guinée. Tous droits réservés.</p>
        </motion.div>
      </div>
    </div>
  )
}
