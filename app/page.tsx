"use client"
import Image from "next/image"
import { ClientButton } from "@/components/ui/client-button"
import { Instagram, Linkedin, MessageSquare, Palette, Camera, Target, Globe } from "lucide-react"
import { ContactButton } from "@/components/ui/contact-button"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GlassCard } from "@/components/ui/glass-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { fadeIn, staggerContainer } from "@/lib/animations"

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background"
    >
      {/* Announcement Bar */}
      <div className="bg-primary text-white py-2 text-center text-xs sm:text-sm animate-fadeIn">
        INNOVACIÓN DIGITAL A TU ALCANCE
      </div>

      {/* Navigation */}
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <Image 
            src="/logo.png" 
            alt="TrashPanda Logo" 
            width={40} 
            height={40}
            className="animate-float"
          />
          <span className="font-display font-bold text-xl text-primary">TrashPanda</span>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-start gap-6 mb-4 sm:mb-0">
          {["INICIO", "SERVICIOS", "PORTAFOLIO", "BLOG", "CONTACTO"].map((item, index) => (
            <a
              key={item}
              href="#"
              className="text-primary hover:text-secondary-dark transition-colors duration-300 font-display font-bold animate-slideIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/trashpandaok/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-wiggle"
          >
            <Instagram className="h-6 w-6 text-primary hover:text-secondary-dark transition-colors duration-300" />
          </a>
          <a
            href="https://www.tiktok.com/@trashpanda.ok"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:animate-wiggle"
          >
            <svg
              className="h-6 w-6 text-primary hover:text-secondary-dark transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v12.5a4.5 4.5 0 1 1-4.5-4.5h4.5" />
              <path d="M12 2a7 7 0 0 0 7 7" />
            </svg>
          </a>
          <ClientButton className="bg-primary text-white hover:bg-primary-dark shadow-retro font-display animate-scaleIn">
            COTIZAR
          </ClientButton>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto mt-8 sm:mt-16 px-6">
        <GlassCard className="p-8 sm:p-12">
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="max-w-2xl text-center sm:text-left"
            >
              <h1 className="mb-6 font-display text-4xl sm:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary-dark">
                  Impulsá tu negocio,
                  <br />
                  sin chamuyo
                </span>
              </h1>
              <p className="mb-8 text-lg sm:text-xl text-primary-dark">
                Estrategia y creatividad hechos a tu medida.
              </p>
              <ClientButton className="bg-[#7A8B69] text-white hover:bg-primary-dark shadow-retro font-display text-lg">
                Descubrinos
              </ClientButton>
            </motion.div>

            <div className="relative h-64 w-64 sm:h-96 sm:w-96">
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

      {/* Services Section */}
      <section className="container mx-auto mt-16 sm:mt-32 px-6">
        <h2 className="mb-12 text-center font-display text-3xl sm:text-4xl font-bold text-primary animate-fadeIn">
          Nuestros Servicios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
          {/* Primera fila: 3 tarjetas */}
          {[
            {
              title: "Estrategias de comunicación",
              icon: MessageSquare,
              description: "Diseñamos planes efectivos para que tu marca diga lo que realmente le importa al target.",
              image: "/gatito.jpg"
            },
            {
              title: "Branding",
              icon: Palette,
              description: "Creamos identidades que conectan con tu audiencia y destacan en el mercado.",
              image: "/gatito.jpg"
            },
            {
              title: "Contenido",
              icon: Camera,
              description: "Producimos contenido que cuenta historias y genera engagement real.",
              image: "/gatito.jpg"
            }
          ].map((service, i) => (
            <div
              key={i}
              className="bg-accent rounded-2xl p-4 shadow-retro transition-all hover:translate-y-[-4px] hover:shadow-lg w-full max-w-sm group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative h-40 w-full mb-4 overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <service.icon className="h-6 w-6 text-primary mb-2" />
              <h3 className="text-lg font-display font-bold text-primary mb-2">{service.title}</h3>
              <p className="text-primary-dark text-sm">{service.description}</p>
            </div>
          ))}
          
          {/* Segunda fila: 2 tarjetas centradas */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl mx-auto">
            {[
              {
                title: "Gestión de Ads",
                icon: Target,
                description: "Campañas, influencers y medios. Creatividad de impacto aplicada al mundo digital y offline.",
                image: "/gatito.jpg"
              },
              {
                title: "Desarrollo Web",
                icon: Globe,
                description: "Diseñamos y desarrollamos sitios web funcionales, atractivos y optimizados para tu negocio.",
                image: "/gatito.jpg"
              }
            ].map((service, i) => (
              <div
                key={i + 3}
                className="bg-accent rounded-2xl p-4 shadow-retro transition-all hover:translate-y-[-4px] hover:shadow-lg w-full max-w-sm group"
                style={{ animationDelay: `${(i + 3) * 100}ms` }}
              >
                <div className="relative h-40 w-full mb-4 overflow-hidden rounded-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <service.icon className="h-6 w-6 text-primary mb-2" />
                <h3 className="text-lg font-display font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-primary-dark text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container mx-auto mt-16 sm:mt-32 px-6">
        <div className="bg-primary rounded-3xl p-8 sm:p-12">
          <h2 className="mb-8 text-center font-display text-3xl sm:text-4xl font-bold text-white animate-fadeIn">
            ¿QUIÉNES SOMOS?
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-6 text-lg text-accent">
              En TrashPanda desafiamos lo obvio. Somos un equipo de mentes inquietas, apasionadas por las marcas con
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

      {/* About Isabella Section */}
      <section className="container mx-auto mt-16 sm:mt-32 px-6">
        <div className="bg-accent rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16">
            <div className="animate-float order-2 sm:order-1 relative h-[400px]">
              <Image
                src="/gatito.jpg"
                alt="Isabella - Fundadora de Trashpanda"
                fill
                className="rounded-2xl object-cover shadow-retro"
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
                  TrashPanda nació para hacer marketing con sentido. Si buscás creatividad con propósito, estás en el
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

      {/* Footer */}
      <footer className="mt-16 sm:mt-32 bg-primary py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4 text-lg font-display font-bold text-white animate-fadeIn">TrashPanda</h3>
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
            <p className="text-accent">&copy; 2023 TrashPanda. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

