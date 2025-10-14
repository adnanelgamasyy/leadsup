"use client"

import { Play, Volume2 } from 'lucide-react'

export default function AudioSamples() {
  const samples = [
    { 
      title: "Identifying Motivation", 
      duration: "2:34",
      caller: "Sarah Martinez",
      role: "Senior Caller",
      description: "Listen to how Sarah builds instant rapport and uncovers seller motivation",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    { 
      title: "Handling Objections", 
      duration: "3:12",
      caller: "Michael Chen",
      role: "Lead Specialist",
      description: "Michael turns a hard 'no' into a scheduled appointment",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    { 
      title: "Setting Appointments", 
      duration: "2:48",
      caller: "Jessica Thompson",
      role: "Closing Expert",
      description: "Jessica expertly books a meeting with a motivated seller",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-primary-orange uppercase tracking-wide mb-3">Audio Proof</p>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-charcoal leading-tight">
              Hear real calls that turned into qualified leads
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Listen to our expert callers navigate conversations and create opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {samples.map((sample, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Caller Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={sample.avatar}
                    alt={sample.caller}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary-orange"
                  />
                  <div>
                    <h4 className="font-bold text-charcoal text-sm">{sample.caller}</h4>
                    <p className="text-xs text-gray-600">{sample.role}</p>
                  </div>
                </div>

                {/* Audio Player UI */}
                <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <button className="w-12 h-12 rounded-full bg-primary-orange hover:bg-primary-orange-dark flex items-center justify-center group-hover:scale-110 transition-all shadow-md">
                      <Play className="h-5 w-5 text-white ml-0.5" fill="white" />
                    </button>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-charcoal">{sample.title}</span>
                        <span className="text-xs text-gray-500">{sample.duration}</span>
                      </div>
                      {/* Waveform visualization */}
                      <div className="flex items-center gap-0.5 h-8">
                        {[...Array(40)].map((_, i) => (
                          <div 
                            key={i}
                            className="flex-1 bg-primary-orange/20 rounded-full transition-all"
                            style={{ 
                              height: `${Math.random() * 100}%`,
                              minHeight: '20%'
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {sample.description}
                </p>

                {/* Volume Icon */}
                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                  <Volume2 className="h-4 w-4" />
                  <span>High-quality recording</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}