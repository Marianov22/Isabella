import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  console.log('🚀 Iniciando solicitud POST')
  console.log('📧 Variables de entorno (raw):', {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS?.substring(0, 3) + '***', // Solo mostramos los primeros 3 caracteres
    NODE_ENV: process.env.NODE_ENV,
    PWD: process.env.PWD,
  })
  
  try {
    const body = await req.json()
    console.log('�� Datos recibidos:', body)

    // Verificar que las variables de entorno estén configuradas
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Faltan variables de entorno:', {
        EMAIL_USER: !!process.env.EMAIL_USER,
        EMAIL_PASS: !!process.env.EMAIL_PASS
      })
      return NextResponse.json(
        { error: "Error de configuración del servidor" },
        { status: 500 }
      )
    }

    const { name, email, phone, type, message } = body

    // Configuración más simple de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // Usar 'service' en lugar de 'host'
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    console.log('📧 Intentando enviar email...')
    
    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `🐼 TrashPanda - Nuevo cliente Web: ${name} (${type})`,
        html: `
          <h2 style="color: #024C6F;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 10px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <p><strong>Tipo:</strong> ${type}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `
      })

      console.log('✅ Email enviado:', info.messageId)
      
      return NextResponse.json({ 
        message: "Mensaje enviado correctamente",
        id: info.messageId
      })

    } catch (emailError: any) {
      console.error('❌ Error al enviar email:', {
        code: emailError.code,
        command: emailError.command,
        response: emailError.response,
        responseCode: emailError.responseCode,
        stack: emailError.stack
      })

      return NextResponse.json(
        { 
          error: "Error al enviar el email",
          details: emailError.message
        },
        { status: 500 }
      )
    }

  } catch (error: any) {
    console.error('❌ Error general:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    })
    
    return NextResponse.json(
      { 
        error: "Error en el servidor",
        details: error.message
      },
      { status: 500 }
    )
  }
} 