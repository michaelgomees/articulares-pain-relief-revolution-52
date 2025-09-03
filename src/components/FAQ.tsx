import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Clock, Package, CreditCard, Heart, Award } from "lucide-react";

const faqData = [
  {
    icon: <Heart className="h-5 w-5 text-primary" />,
    question: "O ARTICULARES realmente funciona para todas as dores articulares?",
    answer: "Sim! O ARTICULARES foi desenvolvido para tratar diferentes tipos de dores articulares, incluindo joelhos, ombros, coluna, cotovelos, mãos, quadris e tornozelos. Nossa fórmula com 95% de curcumina age diretamente na causa da inflamação, proporcionando alívio efetivo em até 14 dias."
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    question: "Em quanto tempo vou sentir os primeiros resultados?",
    answer: "A maioria dos nossos clientes sente alívio significativo já nas primeiras 24-48 horas de uso. Em 14 dias, 94% das pessoas relatam eliminação completa ou quase completa das dores. O produto age rapidamente porque atua diretamente na inflamação."
  },
  {
    icon: <Package className="h-5 w-5 text-primary" />,
    question: "Como devo usar o ARTICULARES?",
    answer: "É muito simples! Tome 10 gotas do ARTICULARES 2 vezes ao dia (manhã e noite), preferencialmente 30 minutos antes das refeições. O frasco de 30ml dura aproximadamente 1 mês. O sabor laranja torna o uso muito agradável."
  },
  {
    icon: <Shield className="h-5 w-5 text-primary" />,
    question: "Tem efeitos colaterais ou contraindicações?",
    answer: "O ARTICULARES é 100% natural e não possui efeitos colaterais conhecidos. Porém, gestantes, lactantes e pessoas com alergia a algum componente da fórmula devem consultar um médico antes do uso. É sempre recomendável consultar seu médico antes de iniciar qualquer suplementação."
  },
  {
    icon: <CreditCard className="h-5 w-5 text-primary" />,
    question: "Quais são as formas de pagamento?",
    answer: "Aceitamos todas as principais formas de pagamento: cartão de crédito (em até 12x sem juros), cartão de débito, PIX (com desconto especial) e boleto bancário. Seu pagamento é 100% seguro e protegido."
  },
  {
    icon: <Package className="h-5 w-5 text-primary" />,
    question: "Como funciona a entrega?",
    answer: "Enviamos para todo o Brasil! A entrega é GRÁTIS para compras acima de R$ 200. O prazo varia de 3 a 10 dias úteis dependendo da sua região. Você recebe o código de rastreamento para acompanhar sua encomenda."
  },
  {
    icon: <Award className="h-5 w-5 text-primary" />,
    question: "E se eu não ficar satisfeito com os resultados?",
    answer: "Oferecemos uma GARANTIA INCONDICIONAL de 7 dias! Se por qualquer motivo você não ficar 100% satisfeito com os resultados, devolvemos todo o seu dinheiro, sem perguntas e sem burocracia. Esse é nosso compromisso com sua satisfação!"
  },
  {
    icon: <Heart className="h-5 w-5 text-primary" />,
    question: "Posso usar junto com outros medicamentos?",
    answer: "O ARTICULARES é um suplemento natural, mas recomendamos sempre consultar seu médico antes de usar junto com outros medicamentos, especialmente anticoagulantes. A maioria dos nossos clientes consegue reduzir ou eliminar completamente outros medicamentos para dor."
  },
  {
    icon: <Shield className="h-5 w-5 text-primary" />,
    question: "O produto é aprovado pela ANVISA?",
    answer: "Sim! O ARTICULARES é registrado na ANVISA como suplemento alimentar e segue todas as normas de qualidade e segurança exigidas. Produzido em laboratórios certificados com rigoroso controle de qualidade."
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    question: "Por quanto tempo devo usar o ARTICULARES?",
    answer: "Para resultados duradouros, recomendamos o uso por pelo menos 3 meses. Muitos clientes optam pelo tratamento de 5 meses para uma recuperação completa e proteção duradoura. Não há limite de tempo para o uso, pois é 100% natural."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
            <span className="text-gradient">DÚVIDAS FREQUENTES</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Tudo que você precisa saber sobre o ARTICULARES
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border/50 rounded-xl px-6 py-2 hover:shadow-glow transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-4">
                    {faq.icon}
                    <span className="font-bold text-lg">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              Ainda tem dúvidas? Fale conosco pelo WhatsApp!
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  const phone = "5511999999999";
                  const message = "Olá! Tenho dúvidas sobre o ARTICULARES. Podem me ajudar?";
                  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full flex items-center gap-2 transition-colors"
              >
                💬 FALAR NO WHATSAPP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};