import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Shield, Clock, Users, Zap, ArrowRight, Heart, Award, Truck, PlayCircle, CreditCard } from "lucide-react";
import produtoPrincipal from "@/assets/produto-principal.jpg";
import heroLiberdade from "@/assets/hero-liberdade.jpg";
import antesDepois from "@/assets/antes-depois.jpg";
import curcumaIngredientes from "@/assets/curcuma-ingredientes.jpg";
import { StickyBuyBar } from "@/components/StickyBuyBar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <StickyBuyBar />
      <WhatsAppButton />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-gradient">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroLiberdade})` }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary text-primary-foreground text-lg px-6 py-2 animate-pulse-glow">
            🔥 DESCOBERTA REVOLUCIONÁRIA!
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight animate-fade-in">
            🚨 DESCOBERTA <span className="text-gradient">REVOLUCIONÁRIA</span>
            <br />
            ELIMINA <span className="text-destructive">DORES ARTICULARES</span>
            <br />
            <span className="text-gradient">EM 14 DIAS!</span> 🎯
          </h1>
          
          <p className="text-xl md:text-3xl mb-8 text-foreground max-w-5xl mx-auto font-bold leading-relaxed">
            "O método <span className="text-gradient">SECRETO</span> que médicos americanos usam para curar 
            <span className="text-primary">artrite, artrose e dores crônicas</span> — em tempo recorde!"
            <br />
            <span className="text-destructive text-2xl">👨‍⚕️ AGORA DISPONÍVEL NO BRASIL!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToOffer}
              className="btn-cta-large group"
            >
              QUERO ACABAR COM MINHAS DORES AGORA!
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-5 w-5 text-primary" />
              <span>Garantia de 7 dias ou seu dinheiro de volta</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-accent" />
              <span>Mais de 50.000 pessoas curadas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>100% Natural e Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-accent" />
              <span>Entrega em todo Brasil</span>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <Clock className="h-6 w-6 animate-pulse" />
            <span className="font-bold text-lg">OFERTA LIMITADA EXPIRA EM:</span>
            <div className="flex gap-2">
              <div className="countdown-box">{String(timeLeft.hours).padStart(2, '0')}</div>
              <span className="text-2xl font-bold">:</span>
              <div className="countdown-box">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <span className="text-2xl font-bold">:</span>
              <div className="countdown-box">{String(timeLeft.seconds).padStart(2, '0')}</div>
            </div>
            <span className="font-bold">ÚLTIMAS UNIDADES!</span>
          </div>
        </div>
      </section>

      {/* Problema - Agitação */}
      <section className="py-20 section-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-foreground">
              VOCÊ ESTÁ <span className="text-destructive">CANSADO</span> DISSO?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-left">
                  <div className="w-6 h-6 bg-destructive rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg">
                    <strong>Dores excruciantes</strong> que te impedem de fazer atividades simples como subir escadas ou pegar objetos?
                  </p>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-6 h-6 bg-destructive rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg">
                    <strong>Noites mal dormidas</strong> porque as dores não te deixam relaxar?
                  </p>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-6 h-6 bg-destructive rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg">
                    <strong>Medicamentos que destroem</strong> seu estômago e fígado sem resolver o problema?
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 text-left">
                  <div className="w-6 h-6 bg-destructive rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg">
                    <strong>Limitações físicas</strong> que te fazem sentir mais velho do que realmente é?
                  </p>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-6 h-6 bg-destructive rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg">
                    <strong>Dependência de outras pessoas</strong> para tarefas que antes eram normais?
                  </p>
                </div>
                <div className="flex items-start gap-4 text-left">
                  <div className="w-6 h-6 bg-destructive rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-lg">
                    <strong>Medo de que as dores piorem</strong> e você nunca mais tenha qualidade de vida?
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-destructive/30 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-destructive mb-4">
                🚨 A VERDADE QUE NINGUÉM TE CONTA:
              </h3>
              <p className="text-lg leading-relaxed">
                A indústria farmacêutica LUCRA BILHÕES mantendo você dependente de medicamentos que apenas MASCARAM a dor, 
                sem curar a verdadeira causa da inflamação. Enquanto isso, você continua sofrendo e gastando fortunas em tratamentos que NÃO FUNCIONAM!
              </p>
            </div>

            <Button onClick={scrollToOffer} className="btn-cta-large">
              QUERO A SOLUÇÃO DEFINITIVA AGORA!
            </Button>
          </div>
        </div>
      </section>

      {/* História/Storytelling */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
              A HISTÓRIA DE <span className="text-gradient">MARIA SILVA</span>
              <br />
              QUE MUDOU TUDO!
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src={antesDepois} 
                  alt="Antes e depois do tratamento" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              
              <div className="space-y-6">
                <div className="testimonial-card">
                  <p className="text-lg mb-4 italic">
                    "Aos 58 anos, eu não conseguia mais subir escadas sem sentir dores terríveis nos joelhos. 
                    Minha filha tinha que me ajudar até mesmo para levantar da cama..."
                  </p>
                  <p className="text-lg mb-4 italic">
                    "Gastei mais de R$ 15.000 em consultas, exames e medicamentos. NADA funcionava. 
                    Eu estava perdendo a esperança de voltar a ter uma vida normal."
                  </p>
                  <p className="text-lg font-bold text-primary">
                    "Até que descobri o ARTICULARES..."
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-center mb-6 text-gradient">
                🎯 RESULTADO EM APENAS 14 DIAS:
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">1º DIA</div>
                  <p>Redução da inflamação</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">3º DIA</div>
                  <p>Dores diminuíram 60%</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">14º DIA</div>
                  <p>Mobilidade 100% restaurada</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card text-center">
              <p className="text-xl mb-4 italic">
                "Hoje, 6 meses depois, eu corro, danço, viajo e vivo SEM DOR! 
                Minha família não acredita na transformação. É como se eu tivesse rejuvenescido 20 anos!"
              </p>
              <div className="flex justify-center mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="h-6 w-6 text-accent fill-current" />
                ))}
              </div>
              <p className="font-bold text-primary">
                - Maria Silva, 58 anos, São Paulo/SP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Produto em Destaque */}
      <section className="py-20 section-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              CONHEÇA O <span className="text-gradient">ARTICULARES</span>
              <br />
              A REVOLUÇÃO NATURAL!
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <img 
                  src={produtoPrincipal} 
                  alt="ARTICULARES - Suplemento Natural" 
                  className="mx-auto max-w-md w-full animate-float shadow-2xl rounded-xl"
                />
                <Badge className="mt-6 bg-primary text-primary-foreground text-lg px-6 py-2">
                  🏆 MÉTODO PATENTEADO
                </Badge>
              </div>
              
              <div className="space-y-8">
                <div className="card-glow">
                  <h3 className="text-2xl font-bold mb-4 text-gradient">
                    ⚡ AÇÃO TRIPLA REVOLUCIONÁRIA:
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg">1. ANTI-INFLAMATÓRIO NATURAL</h4>
                        <p>Cúrcuma com 95% de curcumina reduz inflamação em até 80%</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg">2. REGENERAÇÃO ARTICULAR</h4>
                        <p>Estimula produção de cartilagem e líquido sinovial</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg">3. PROTEÇÃO DURADOURA</h4>
                        <p>Fortalece articulações contra futuras lesões</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl p-6">
                  <h4 className="text-xl font-bold mb-4 text-center">
                    🎯 RESULTADOS COMPROVADOS:
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-black text-primary">98%</div>
                      <p className="text-sm">Sentem alívio em 24h</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-primary">94%</div>
                      <p className="text-sm">Eliminam dores em 14 dias</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-primary">89%</div>
                      <p className="text-sm">Param medicamentos</p>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-primary">100%</div>
                      <p className="text-sm">Satisfação garantida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredientes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
              OS <span className="text-gradient">INGREDIENTES SECRETOS</span>
              <br />
              QUE FAZEM A DIFERENÇA!
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <img 
                  src={curcumaIngredientes} 
                  alt="Cúrcuma - Ingrediente Principal" 
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
              
              <div className="space-y-6">
                <div className="card-glow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">CÚRCUMA CONCENTRADA</h3>
                  </div>
                  <p className="text-lg mb-4">
                    <strong>95% de Curcumina Pura</strong> - O anti-inflamatório natural mais poderoso do mundo! 
                    Utilizada há 5.000 anos na medicina ayurvédica.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Reduz inflamação em articulações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Elimina radicais livres nocivos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Acelera regeneração celular</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-glow text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">100% NATURAL</h4>
                <p>Fórmula desenvolvida com ingredientes orgânicos, sem químicos nocivos ou conservantes artificiais.</p>
              </div>
              
              <div className="card-glow text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">ZERO EFEITOS COLATERAIS</h4>
                <p>Diferente dos medicamentos tradicionais, não agride estômago, fígado ou rins. Totalmente seguro!</p>
              </div>
              
              <div className="card-glow text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">CIENTIFICAMENTE APROVADO</h4>
                <p>Fórmula validada por estudos clínicos e aprovada por órgãos regulamentadores internacionais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Explosivos */}
      <section className="py-20 section-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
              VEJA O QUE NOSSOS <span className="text-gradient">CLIENTES FALAM!</span>
              <br />
              <small className="text-xl text-muted-foreground">Mais de 50.000 vidas transformadas!</small>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="testimonial-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">JS</div>
                  <div>
                    <h4 className="font-bold">João Santos</h4>
                    <p className="text-sm text-muted-foreground">Aposentado, 67 anos</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 text-accent fill-current" />)}
                </div>
                <p className="italic mb-4">
                  "Sofri 15 anos com artrose no joelho. Em apenas 5 dias usando ARTICULARES, 
                  consegui subir escadas sem dor! Agora jogo futebol com meus netos!"
                </p>
                <p className="text-primary font-bold">✅ CURADO EM 14 DIAS</p>
              </div>
              
              <div className="testimonial-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">AR</div>
                  <div>
                    <h4 className="font-bold">Ana Rosa</h4>
                    <p className="text-sm text-muted-foreground">Professora, 52 anos</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 text-accent fill-current" />)}
                </div>
                <p className="italic mb-4">
                  "Dores horríveis na coluna me impediam de trabalhar. Gastei R$ 8.000 em tratamentos. 
                  Com ARTICULARES, em 2 semanas estava 100% curada!"
                </p>
                <p className="text-primary font-bold">✅ ECONOMIZOU R$ 12.000</p>
              </div>
              
              <div className="testimonial-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">CF</div>
                  <div>
                    <h4 className="font-bold">Carlos Ferreira</h4>
                    <p className="text-sm text-muted-foreground">Empresário, 45 anos</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(star => <Star key={star} className="h-4 w-4 text-accent fill-current" />)}
                </div>
                <p className="italic mb-4">
                  "Atleta desde jovem, as dores no ombro quase me fizeram parar. 
                  ARTICULARES me devolveu a performance e a paixão pelo esporte!"
                </p>
                <p className="text-primary font-bold">✅ VOLTOU AOS TREINOS</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 inline-block">
                <h3 className="text-2xl font-bold mb-4">📊 PESQUISA OFICIAL:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-4xl font-black">50.247</div>
                    <p>Pessoas curadas</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black">97.3%</div>
                    <p>Taxa de sucesso</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black">4.9★</div>
                    <p>Avaliação média</p>
                  </div>
                  <div>
                    <div className="text-4xl font-black">99.1%</div>
                    <p>Recomendariam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pagamento na Entrega */}
      <section className="py-16 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card rounded-2xl shadow-2xl p-8 border-2 border-primary/20">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-gradient flex flex-col items-center gap-4">
                <CreditCard className="h-12 w-12 text-primary" />
                PAGUE SOMENTE QUANDO RECEBER
                <br />
                <span className="text-destructive">SEM COMPLICAÇÃO!</span>
              </h2>
              
              <p className="text-xl md:text-2xl mb-8 text-foreground leading-relaxed">
                <strong>Quer mais conforto?</strong> Nós trazemos até você, e <span className="text-primary font-bold">você só paga quando receber</span>. 
                Sem cobrança antecipada. Só o pagamento na entrega, no momento em que você tiver o produto em mãos.
              </p>
              
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 mb-8 border border-primary/20">
                <div className="flex items-start gap-4 justify-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left max-w-2xl">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      ✅ MÁXIMA SEGURANÇA E CONFIANÇA
                    </h3>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Receba primeiro, pague depois</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Sem risco de perder dinheiro</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>Total transparência na entrega</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <h4 className="text-sm font-bold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-1">
                  ⚠️ IMPORTANTE - LEIA COM ATENÇÃO:
                </h4>
                <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
                  <strong>Atenção!</strong> O não pagamento na entrega pode gerar restrições em seu CPF, 
                  impossibilitando futuras compras conosco e parceiros. Faça o pagamento no momento da entrega 
                  para evitar contratempos e continue aproveitando nossos benefícios exclusivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta Irresistível */}
      <section id="oferta" className="py-20 bg-gradient-to-b from-background to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-destructive text-destructive-foreground text-lg px-6 py-2 animate-pulse">
              🔥 OFERTA LIMITADA - ÚLTIMAS HORAS!
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              ELIMINE SUAS DORES
              <br />
              <span className="text-gradient">COM 70% DE DESCONTO!</span>
            </h2>
            
            <p className="text-xl mb-12 text-muted-foreground">
              Por tempo limitado, você pode experimentar o ARTICULARES com desconto exclusivo. 
              <strong className="text-primary"> Não perca esta oportunidade única!</strong>
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Oferta 1 */}
              <div className="relative bg-card border-2 border-border rounded-xl p-6 hover:shadow-glow transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">TESTE AGORA</h3>
                  <p className="text-sm text-muted-foreground">2 meses de tratamento</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-sm text-muted-foreground line-through">De R$ 594,00</div>
                  <div className="text-4xl font-black text-primary mb-2">R$ 297</div>
                  <div className="text-sm text-accent font-bold">ou 12x de R$ 24,75</div>
                </div>
                
                <Button onClick={scrollToOffer} className="w-full btn-cta mb-4">
                  QUERO ESTE DESCONTO!
                </Button>
                
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>2 frascos (60 dias)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Frete GRÁTIS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Garantia 7 dias</span>
                  </li>
                </ul>
              </div>

              {/* Oferta 2 - DESTAQUE */}
              <div className="relative bg-gradient-to-b from-primary to-accent text-white rounded-xl p-6 transform scale-105 shadow-2xl border-4 border-accent">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-destructive text-destructive-foreground text-sm px-4 py-1">
                    🏆 MAIS ESCOLHIDO
                  </Badge>
                </div>
                
                <div className="text-center mb-6 mt-4">
                  <h3 className="text-xl font-bold mb-2">CURA COMPLETA</h3>
                  <p className="text-sm opacity-80">5 meses de tratamento</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-sm opacity-80 line-through">De R$ 1.485,00</div>
                  <div className="text-4xl font-black mb-2">R$ 397</div>
                  <div className="text-sm font-bold">ou 12x de R$ 33,08</div>
                  <Badge className="mt-2 bg-white text-primary">ECONOMIA DE R$ 1.088</Badge>
                </div>
                
                <Button onClick={scrollToOffer} className="w-full bg-white text-primary hover:bg-white/90 font-bold py-3 mb-4">
                  QUERO CURAR DE VEZ!
                </Button>
                
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>5 frascos (150 dias)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Frete GRÁTIS para todo Brasil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Garantia ESTENDIDA 60 dias</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>🎁 E-book GRATUITO</span>
                  </li>
                </ul>
              </div>

              {/* Oferta 3 */}
              <div className="relative bg-card border-2 border-accent rounded-xl p-6 hover:shadow-glow transition-all duration-300">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-accent text-accent-foreground text-sm px-3 py-1">
                    💎 PREMIUM
                  </Badge>
                </div>
                
                <div className="text-center mb-6 mt-4">
                  <h3 className="text-xl font-bold mb-2">TRATAMENTO ANUAL</h3>
                  <p className="text-sm text-muted-foreground">12 meses de proteção</p>
                </div>
                
                <div className="text-center mb-6">
                  <div className="text-sm text-muted-foreground line-through">De R$ 3.564,00</div>
                  <div className="text-4xl font-black text-primary mb-2">R$ 697</div>
                  <div className="text-sm text-accent font-bold">ou 12x de R$ 58,08</div>
                  <Badge className="mt-2 bg-accent text-accent-foreground">ECONOMIA DE R$ 2.867</Badge>
                </div>
                
                <Button onClick={scrollToOffer} className="w-full btn-cta mb-4">
                  QUERO ESTAR PROTEGIDO!
                </Button>
                
                <ul className="text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>12 frascos (360 dias)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Frete GRÁTIS + Express</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Garantia VITALÍCIA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>🎁 Kit completo GRÁTIS</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Garantia */}
            <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl p-8 mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Shield className="h-12 w-12 text-primary" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold">GARANTIA BLINDADA DE 7 DIAS</h3>
                  <p className="text-lg">100% do seu dinheiro de volta se não ficar satisfeito!</p>
                </div>
              </div>
              
              <p className="text-lg text-center max-w-3xl mx-auto">
                Estamos TÃO confiantes nos resultados do ARTICULARES que oferecemos uma garantia total de 7 dias. 
                Se você não sentir alívio significativo das suas dores articulares, devolvemos <strong>100% do seu investimento</strong> 
                sem perguntas e sem burocracia!
              </p>
            </div>

            {/* Urgência Final */}
            <div className="bg-destructive text-destructive-foreground rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-bold mb-4">⚠️ ATENÇÃO: ESTOQUE LIMITADO!</h3>
              <p className="text-lg mb-4">
                Devido à alta procura e dificuldade de obter a cúrcuma 95% pura, 
                conseguimos produzir apenas <strong>500 unidades</strong> por mês.
              </p>
              <p className="text-lg font-bold">
                Restam apenas <span className="text-3xl">23 UNIDADES</span> em estoque!
              </p>
            </div>

            <div className="space-y-4">
              <Button onClick={scrollToOffer} className="btn-cta-large w-full max-w-2xl">
                🚀 QUERO MINHA LIBERDADE AGORA!
              </Button>
              
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>Compra 100% Segura</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  <span>Entrega Rápida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Garantia Total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials - COMENTADO PARA REATIVAR NO FUTURO */}
      {/* <VideoTestimonials /> */}
      
      {/* Vídeos da Fábrica */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-center">
              VÍDEOS DA <span className="text-gradient">FÁBRICA</span>
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Confira como nossos produtos são fabricados — 3 vídeos
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Video 1 */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:shadow-glow transition-all duration-300">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-4 bg-muted flex items-center justify-center cursor-pointer group">
                  <div className="text-center">
                    <PlayCircle className="h-16 w-16 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-muted-foreground">Vídeo 1 - Processo de Fabricação</p>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Processo de Fabricação</h3>
                <p className="text-sm text-center text-muted-foreground">
                  Veja como produzimos com a mais alta qualidade
                </p>
              </Card>

              {/* Video 2 */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:shadow-glow transition-all duration-300">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-4 bg-muted flex items-center justify-center cursor-pointer group">
                  <div className="text-center">
                    <PlayCircle className="h-16 w-16 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-muted-foreground">Vídeo 2 - Controle de Qualidade</p>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Controle de Qualidade</h3>
                <p className="text-sm text-center text-muted-foreground">
                  Nossos rigorosos testes de qualidade
                </p>
              </Card>

              {/* Video 3 */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:shadow-glow transition-all duration-300">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-4 bg-muted flex items-center justify-center cursor-pointer group">
                  <div className="text-center">
                    <PlayCircle className="h-16 w-16 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm text-muted-foreground">Vídeo 3 - Embalagem e Envio</p>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Embalagem e Envio</h3>
                <p className="text-sm text-center text-muted-foreground">
                  Como preparamos e enviamos seu produto
                </p>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-lg mb-6 text-muted-foreground">
                Transparência total no processo de fabricação do <strong className="text-primary">ARTICULARES</strong>
              </p>
              <Button 
                onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-cta-large"
              >
                QUERO EXPERIMENTAR ESTE PRODUTO DE QUALIDADE!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            NÃO DEIXE A DOR
            <br />
            CONTROLAR SUA VIDA!
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto">
            Você tem duas escolhas: continuar sofrendo com dores articulares que só pioram com o tempo, 
            ou dar o primeiro passo para uma vida livre de dor e cheia de movimento. 
            <strong>A escolha é sua, mas o tempo está acabando!</strong>
          </p>
          
          <div className="space-y-6">
            <Button onClick={scrollToOffer} className="bg-white text-primary hover:bg-white/90 font-black py-6 px-12 text-2xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300">
              🚀 QUERO MINHA LIBERDADE AGORA!
            </Button>
            
            <p className="text-lg opacity-90">
              ⏰ Oferta válida por tempo limitado • 🚛 Frete grátis para todo Brasil • 🔒 Compra 100% segura
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gradient mb-4">ARTICULARES</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A solução natural que está transformando a vida de milhares de pessoas, 
              devolvendo a liberdade de movimento e eliminando as dores articulares para sempre.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3">Contato</h4>
              <p className="text-sm text-muted-foreground">
                📧 articularescontato@gmail.com<br />
                📱 (11) 99999-9999<br />
                🕒 Seg-Sex: 8h às 18h
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Garantias</h4>
              <p className="text-sm text-muted-foreground">
                ✅ 7 dias de garantia total<br />
                🚛 Frete grátis para todo Brasil<br />
                🔒 Pagamento 100% seguro
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-3">Certificações</h4>
              <p className="text-sm text-muted-foreground">
                🏆 ANVISA aprovado<br />
                📜 ISO 9001 certificado<br />
                🌿 100% natural e orgânico
              </p>
            </div>
          </div>
          
          <div className="border-t pt-8">
            <p className="text-sm text-muted-foreground">
              © 2024 ARTICULARES. Todos os direitos reservados. | 
              Este produto não é um medicamento e não substitui orientação médica.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;