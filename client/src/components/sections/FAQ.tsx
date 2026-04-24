/**
 * Seção 14 - FAQ
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReveal } from "@/hooks/useReveal";

const faq = [
  {
    id: "1",
    pergunta: "Pra quem é indicado o POCUS online?",
    resposta:
      "O curso é ideal para estudantes de medicina no final da formação, médicos recém-formados e profissionais com qualquer tempo de experiência que desejam ganhar mais segurança no uso do POCUS e se sentir mais preparados para conduzir o paciente grave com clareza e precisão.",
  },
  {
    id: "2",
    pergunta: "Preciso ter experiência prévia em POCUS para fazer o curso?",
    resposta:
      "Não. O curso foi estruturado justamente para médicos e futuros profissionais que ainda não se sentem seguros no uso do POCUS. Você começa pelos fundamentos e evolui até a aplicação prática no paciente grave, com foco em ganhar clareza e confiança na tomada de decisão à beira-leito.",
  },
  {
    id: "3",
    pergunta: "Como funciona o acesso ao curso?",
    resposta:
      "Após a confirmação do pagamento, você recebe imediatamente o acesso à plataforma online. O curso fica disponível por 1 ano completo, permitindo que você estude no seu ritmo e revise o conteúdo quantas vezes precisar.",
  },
  {
    id: "4",
    pergunta: "O curso oferece certificado?",
    resposta:
      "Sim, ao concluir o curso você recebe um certificado de participação que pode ser usado para comprovação de atividades de educação continuada e desenvolvimento profissional.",
  },
  {
    id: "5",
    pergunta: "Posso fazer o curso pelo celular ou tablet?",
    resposta:
      "Sim, a plataforma é totalmente responsiva e funciona perfeitamente em computadores, tablets e smartphones. Você pode estudar onde e quando quiser, com sincronização automática do seu progresso.",
  },
  {
    id: "6",
    pergunta: "Como funciona a garantia de 7 dias?",
    resposta:
      "Se por qualquer motivo você não ficar satisfeito com o curso, pode solicitar o reembolso integral em até 7 dias após a compra. É simples, rápido e sem burocracia.",
  },
  {
    id: "7",
    pergunta: "Há suporte para dúvidas durante o curso?",
    resposta:
      "Sim, oferecemos suporte dedicado através de nossa equipe especializada. Você pode enviar suas dúvidas e receber respostas em até 48 horas, além de poder participar da comunidade exclusiva de alunos.",
  },
  {
    id: "8",
    pergunta: "O conteúdo é atualizado?",
    resposta:
      "Sim. O conteúdo é constantemente atualizado com as evidências mais recentes e os principais protocolos de POCUS aplicados ao paciente grave. Durante o seu período de acesso, você recebe automaticamente todas as atualizações.",
  },
];

export default function FAQ() {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-light section-padding reveal">
      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="headline-section">Perguntas Frequentes</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-white rounded-2xl border border-border/40 px-5 sm:px-7 overflow-hidden transition-all duration-300 hover:border-accent/15"
                style={{ boxShadow: "0 1px 3px oklch(0 0 0 / 0.02), 0 4px 16px oklch(0 0 0 / 0.03)" }}
              >
                <AccordionTrigger className="text-left font-semibold text-sm sm:text-base py-5 hover:no-underline gap-4 [&[data-state=open]]:text-accent transition-colors duration-200">
                  {item.pergunta}
                </AccordionTrigger>
                <AccordionContent className="body-sm text-muted-foreground pb-6 leading-relaxed">
                  {item.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
