import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Nome, e-mail e empresa são obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Vairu Consulting — Site" <${process.env.GMAIL_USER}>`,
      to: "vairu.rs@gmail.com",
      replyTo: email,
      subject: `🚀 Novo alinhamento estratégico: ${name} — ${company}`,
      html: `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head><meta charset="UTF-8" /></head>
        <body style="margin:0;padding:0;background:#f4f6f8;font-family:system-ui,sans-serif;">
          <div style="max-width:560px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

            <!-- Header -->
            <div style="background:linear-gradient(135deg,#0D1825 0%,#1A2D40 100%);padding:32px 36px;">
              <div style="font-size:11px;font-weight:600;letter-spacing:3px;color:#7A8C6A;text-transform:uppercase;margin-bottom:8px;">Vairu Consulting</div>
              <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;">
                Novo Alinhamento Estratégico Solicitado
              </h1>
              <div style="margin-top:8px;font-size:13px;color:#8892A4;">
                Recebido em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo", dateStyle: "long", timeStyle: "short" })}
              </div>
            </div>

            <!-- Body -->
            <div style="padding:32px 36px;">

              <div style="margin-bottom:24px;">
                <div style="font-size:11px;font-weight:600;letter-spacing:2px;color:#E8941A;text-transform:uppercase;margin-bottom:16px;">
                  Dados do Contato
                </div>

                <table style="width:100%;border-collapse:collapse;">
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #F0F2F5;width:110px;">
                      <span style="font-size:12px;font-weight:600;color:#8892A4;text-transform:uppercase;letter-spacing:1px;">Nome</span>
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #F0F2F5;">
                      <span style="font-size:15px;font-weight:600;color:#1A2744;">${name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;border-bottom:1px solid #F0F2F5;">
                      <span style="font-size:12px;font-weight:600;color:#8892A4;text-transform:uppercase;letter-spacing:1px;">Empresa</span>
                    </td>
                    <td style="padding:10px 0;border-bottom:1px solid #F0F2F5;">
                      <span style="font-size:15px;font-weight:600;color:#1A2744;">${company}</span>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;${message ? "border-bottom:1px solid #F0F2F5;" : ""}">
                      <span style="font-size:12px;font-weight:600;color:#8892A4;text-transform:uppercase;letter-spacing:1px;">E-mail</span>
                    </td>
                    <td style="padding:10px 0;${message ? "border-bottom:1px solid #F0F2F5;" : ""}">
                      <a href="mailto:${email}" style="font-size:15px;color:#E8941A;text-decoration:none;font-weight:500;">${email}</a>
                    </td>
                  </tr>
                  ${
                    message
                      ? `<tr>
                    <td style="padding:10px 0;vertical-align:top;">
                      <span style="font-size:12px;font-weight:600;color:#8892A4;text-transform:uppercase;letter-spacing:1px;">Mensagem</span>
                    </td>
                    <td style="padding:10px 0;">
                      <span style="font-size:14px;color:#3D4F60;line-height:1.6;">${message.replace(/\n/g, "<br/>")}</span>
                    </td>
                  </tr>`
                      : ""
                  }
                </table>
              </div>

              <!-- CTA -->
              <div style="background:#F8F9FA;border-radius:8px;padding:20px;margin-top:8px;">
                <div style="font-size:13px;color:#5A6A7A;margin-bottom:12px;">Responder diretamente para:</div>
                <a href="mailto:${email}?subject=Re: Alinhamento Estratégico — Vairu Consulting"
                   style="display:inline-block;background:linear-gradient(135deg,#E8941A,#D4820E);color:#fff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none;">
                  Responder para ${name} →
                </a>
              </div>
            </div>

            <!-- Footer -->
            <div style="padding:20px 36px;background:#F8F9FA;border-top:1px solid #ECEEF2;">
              <p style="margin:0;font-size:12px;color:#8892A4;text-align:center;">
                Vairu Consulting · vairu.rs@gmail.com · +55 (51) 9 9794-3696
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] send error:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
