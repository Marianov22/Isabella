"use client"
import Image from "next/image"
import { ClientButton } from "@/components/ui/client-button"
import { Instagram, Linkedin, MessageSquare, Palette, Camera, Target, Globe, Menu, X } from "lucide-react"
import { ContactButton } from "@/components/ui/contact-button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { fadeIn, staggerContainer } from "@/lib/animations"
import { useState, useEffect } from "react"
import { AnimatedStroke } from "@/components/ui/animated-stroke"

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: 'success' | 'error' | null,
    message: string
  }>({ type: null, message: '' })

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const resetForm = (form: HTMLFormElement) => {
    form.reset()
    setTimeout(() => {
      setFormStatus({ type: null, message: '' })
    }, 5000)
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-primary"
    >
      {/* Announcement Bar */}
      <div className="bg-primary-dark text-white py-2 text-center text-xs sm:text-sm animate-fadeIn">
        CREATIVIDAD CON PROPÓSITO
      </div>

      {/* Navigation */}
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 relative">
        {/* Logo y Nombre */}
        <div className="flex items-center gap-6 w-full sm:w-auto justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src="/Panda.png" 
              alt="TrashPanda Studio Logo" 
              width={50} 
              height={50}
              className="animate-float"
            />
            <span className="font-display font-bold text-xl sm:text-2xl text-accent">TrashPanda Studio</span>
          </div>
          {/* Botón de menú móvil */}
          <button className="sm:hidden text-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } sm:flex flex-col sm:flex-row items-center w-full sm:w-auto gap-6 mt-4 sm:mt-0 absolute sm:relative top-full sm:top-auto left-0 bg-primary-dark sm:bg-transparent p-4 sm:p-0 shadow-lg sm:shadow-none z-50`}>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
            {["INICIO", "SERVICIOS", "PORTAFOLIO", "BLOG", "CONTACTO"].map((item, index) => (
              <a
                key={item}
                href="#"
                className="text-accent hover:text-secondary transition-colors duration-300 font-display font-bold animate-slideIn w-full sm:w-auto text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="https://www.instagram.com/trashpandaok/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5 text-accent hover:text-secondary transition-colors duration-300" />
            </a>
            <ClientButton className="bg-primary text-white hover:bg-primary-dark shadow-retro font-display text-sm w-full sm:w-auto">
              COTIZAR
            </ClientButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto mt-4 sm:mt-8 px-4 sm:px-6">
        <GlassCard className="p-4 sm:p-8">
          <motion.div
            variants={staggerContainer}
            className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-6"
          >
            <motion.div
              variants={fadeIn}
              className="max-w-xl text-center sm:text-left relative"
            >
              <h1 className="mb-3 sm:mb-4 font-display text-3xl sm:text-6xl font-bold leading-tight text-accent">
                Impulsá tu negocio,
                <br className="hidden sm:block" />
                <AnimatedStroke>
                  sin chamuyo
                </AnimatedStroke>
              </h1>
              <p className="mb-4 sm:mb-6 text-base sm:text-xl text-secondary-light">
                Estrategia y creatividad hechos a tu medida.
              </p>
              <ClientButton className="bg-[#7A8B69] text-white hover:bg-primary-dark shadow-retro font-display text-base sm:text-lg w-full sm:w-auto">
                Descubrinos
              </ClientButton>
            </motion.div>

            <div className="relative w-full sm:w-[600px] h-[250px] sm:h-[400px]">
              <Image
                src="/gatito.jpg"
                alt="Hero Image"
                fill
                className="object-cover rounded-2xl shadow-retro"
                priority
              />
            </div>
          </motion.div>
        </GlassCard>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto mt-16 sm:mt-32 px-6">
        <div className="bg-primary rounded-3xl p-8 sm:p-12">
          <h2 className="mb-8 text-center font-display text-3xl sm:text-4xl font-bold text-white animate-fadeIn">
            ¿QUIÉNES SOMOS?
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-lg text-accent">
              En TrashPanda Studio desafiamos lo obvio. Somos un equipo de mentes inquietas, apasionadas por las marcas con
              personalidad y comprometidas con estrategias que combinan creatividad e impacto real.
            </p>
            <p className="mb-6 text-lg text-accent">
              Nuestra misión es ayudar a que tu proyecto pueda comunicar su esencia de manera auténtica y efectiva. Nos
              adaptamos a cada proyecto, analizamos tendencias y diseñamos soluciones a medida que logramos resultados
              tangibles.
            </p>
            <p className="mb-8 text-lg font-display font-bold text-white">
              Cada proyecto es único y su estrategia debe reflejarlo.
            </p>
            <ContactButton />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto mt-16 sm:mt-32 px-6">
        <h2 className="mb-8 text-center font-display text-3xl sm:text-4xl font-bold text-secondary-light animate-fadeIn">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
          {/* Primera fila: 3 tarjetas */}
          {[
            {
              title: "Estrategias de comunicación",
              icon: MessageSquare,
              description: "Diseñamos planes efectivos para que tu marca diga lo que realmente le importa al target."
            },
            {
              title: "Branding",
              icon: Palette,
              description: "Creamos identidades que conectan con tu audiencia y destacan en el mercado."
            },
            {
              title: "Contenido",
              icon: Camera,
              description: "Producimos contenido que cuenta historias y genera engagement real."
            }
          ].map((service, i) => (
            <div
              key={i}
              className="bg-accent/90 backdrop-blur-sm rounded-3xl p-8 shadow-retro transition-all 
              hover:translate-y-[-4px] hover:shadow-lg w-full max-w-sm group border border-accent/20
              hover:bg-accent"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <service.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-display font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-primary text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
          
          {/* Segunda fila: 2 tarjetas */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
            {[
              {
                title: "Gestión de Ads",
                icon: Target,
                description: "Campañas, influencers y medios. Creatividad de impacto aplicada al mundo digital y offline."
              },
              {
                title: "Desarrollo Web",
                icon: Globe,
                description: "Diseñamos y desarrollamos sitios web funcionales, atractivos y optimizados para tu negocio."
              }
            ].map((service, i) => (
              <div
                key={i + 3}
                className="bg-accent/90 backdrop-blur-sm rounded-3xl p-8 shadow-retro transition-all 
                hover:translate-y-[-4px] hover:shadow-lg w-full max-w-sm group border border-accent/20
                hover:bg-accent"
                style={{ animationDelay: `${(i + 3) * 100}ms` }}
              >
                <service.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-display font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-primary text-base leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Isabella Section */}
      <section className="container mx-auto mt-16 sm:mt-32 px-6">
        <div className="bg-accent rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="animate-float order-2 sm:order-1 relative w-full aspect-square max-w-[500px] mx-auto">
              <Image
                src="/isa.jpg"
                alt="Isabella - Fundadora de Trashpanda"
                fill
                className="rounded-2xl object-cover shadow-retro"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            <div className="animate-fadeIn order-1 sm:order-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-6 text-center sm:text-left">
                ¡Hola! Soy Isabella, la mente detrás de TrashPanda.
              </h2>
              <div className="space-y-4 text-primary-dark">
                <p>
                  Con más de media década de experiencia en marketing y comunicación, he trabajado con marcas globales,
                  explorado distintas industrias y perfeccionado mi enfoque: estrategia clara, creatividad sin límites y
                  ejecución precisa.
                </p>
                <p>
                  La organización y los procesos son mi fuerte, sin perder la flexibilidad que me permite innovar. Mi
                  experiencia en el mundo corporativo me ha dado las herramientas para afrontar desafíos con metodología
                  y visión estratégica, sin sacrificar la esencia de cada cliente.
                </p>
                <p>
                  Además, mi formación en fotografía y mi experiencia en producciones audiovisuales me permiten abordar
                  la comunicación desde una mirada estética y narrativa integral. No se trata solo de crear contenido,
                  sino de contar historias que conecten y generen impacto.
                </p>
                <p className="font-display font-bold text-primary">
                  TrashPanda Studio nació para hacer marketing con sentido. Si buscás creatividad con propósito, estás en el
                  lugar indicado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto mt-16 sm:mt-32 px-6">
        <div className="bg-secondary rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="mb-4 font-display text-3xl sm:text-4xl font-bold text-primary animate-fadeIn">
            ¡Queremos conocerte!
          </h2>
          <p className="mb-8 text-lg sm:text-xl text-primary-dark">
            Descubramos juntos como impulsar tu proyecto y llevarlo al siguiente nivel
          </p>
          <ClientButton className="bg-primary text-white hover:bg-primary-dark shadow-retro font-display text-lg animate-scaleIn">
            Reservá una consulta
          </ClientButton>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto mt-16 sm:mt-32 px-6">
        <div className="bg-accent/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto">
          <h2 className="mb-8 text-center font-display text-3xl sm:text-4xl font-bold text-primary animate-fadeIn">
            Contactanos
          </h2>
          <form className="space-y-6" onSubmit={async (e) => {
            e.preventDefault()
            setIsSubmitting(true)
            setFormStatus({ type: null, message: '' })

            const form = e.currentTarget
            const formData = new FormData(form)
            const data = {
              name: formData.get('name'),
              email: formData.get('email'),
              phone: formData.get('phone'),
              type: formData.get('type'),
              message: formData.get('message')
            }

            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
              })

              if (!response.ok) throw new Error('Error al enviar el mensaje')

              setFormStatus({
                type: 'success',
                message: '¡Mensaje enviado correctamente! Te contactaremos pronto.'
              })
              resetForm(form)
            } catch (error) {
              setFormStatus({
                type: 'error',
                message: 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.'
              })
            } finally {
              setIsSubmitting(false)
            }
          }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-primary font-display font-bold">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 
                  focus:outline-none focus:ring-2 focus:ring-primary/20 text-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-primary font-display font-bold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 
                  focus:outline-none focus:ring-2 focus:ring-primary/20 text-primary"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2 text-primary font-display font-bold">
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 
                focus:outline-none focus:ring-2 focus:ring-primary/20 text-primary"
              />
            </div>

            <div>
              <label htmlFor="type" className="block mb-2 text-primary font-display font-bold">
                Soy
              </label>
              <select
                id="type"
                name="type"
                className="w-full px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 
                focus:outline-none focus:ring-2 focus:ring-primary/20 text-primary"
                required
              >
                <option value="">Seleccionar...</option>
                <option value="influencer">Influencer</option>
                <option value="empresa">Empresa</option>
                <option value="artistico">Proyecto artístico</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-primary font-display font-bold">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 
                focus:outline-none focus:ring-2 focus:ring-primary/20 text-primary resize-none"
                required
              ></textarea>
            </div>

            {formStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`
                  p-4 rounded-xl flex items-center justify-center gap-2
                  ${formStatus.type === 'success' 
                    ? 'bg-secondary/20 text-primary border border-secondary/30' 
                    : 'bg-red-500/20 text-red-600 border border-red-500/30'
                  }
                `}
              >
                {formStatus.type === 'success' ? (
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                ) : (
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  </svg>
                )}
                <p className="font-display">{formStatus.message}</p>
              </motion.div>
            )}

            <div className="text-center">
              <ClientButton 
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-white hover:bg-primary-dark shadow-retro 
                font-display text-lg px-8 py-3 w-full sm:w-auto disabled:opacity-50
                disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle 
                        className="opacity-25" 
                        cx="12" 
                        cy="12" 
                        r="10" 
                        stroke="currentColor" 
                        strokeWidth="4"
                      />
                      <path 
                        className="opacity-75" 
                        fill="currentColor" 
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar mensaje'
                )}
              </ClientButton>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 sm:mt-32 bg-primary py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4 text-lg font-display font-bold text-white animate-fadeIn">TrashPanda Studio</h3>
              <p className="text-accent">Estrategias hechas a medida, sin fórmulas vacías.</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-display font-bold text-white animate-fadeIn">Servicios</h3>
              <ul className="space-y-2 text-accent">
                <li>Estrategias de comunicación</li>
                <li>Branding</li>
                <li>Generación de contenido</li>
                <li>Gestión de Ads</li>
                <li>Desarrollo Web</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-display font-bold text-white animate-fadeIn">Contacto</h3>
              <p className="text-accent">trashpandaok@gmail.com</p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-display font-bold text-white animate-fadeIn">Seguinos</h3>
              <div className="flex gap-4 justify-center sm:justify-start">
                <a href="https://www.instagram.com/trashpandaok/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-6 w-6 text-accent hover:text-secondary transition-colors duration-300" />
                </a>
                <a href="https://www.tiktok.com/@trashpanda.ok" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="h-6 w-6 text-accent hover:text-secondary transition-colors duration-300"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.321 5.562a5.124 5.124 0 0 1 0 7.25M12 19.5a7.5 7.5 0 1 1 7.5-7.5"
                    />
                  </svg>
                </a>
                <Linkedin className="h-6 w-6 text-accent hover:text-secondary transition-colors duration-300" />
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-accent">&copy; 2025 TrashPanda Studio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

