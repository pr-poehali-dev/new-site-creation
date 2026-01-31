import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [weight, setWeight] = useState('');
  const [volume, setVolume] = useState('');
  const [distance, setDistance] = useState('');
  const [cost, setCost] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const calculateCost = () => {
    const w = parseFloat(weight) || 0;
    const v = parseFloat(volume) || 0;
    const d = parseFloat(distance) || 0;
    const baseCost = 500;
    const perTonKm = 15;
    const perM3Km = 25;
    const calculated = baseCost + (w * d * perTonKm) + (v * d * perM3Km);
    setCost(Math.round(calculated));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-secondary text-secondary-foreground shadow-md">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Truck" size={32} className="text-primary" />
            <span className="text-xl font-bold">ТрансСыпучие</span>
          </div>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li><a href="#hero" className="hover:text-primary transition-colors">Главная</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Услуги</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">О компании</a></li>

            <li><a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
          </ul>
          <Button size="sm" className="hidden md:block">Связаться</Button>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary/95 backdrop-blur-sm border-t border-white/10 animate-in slide-in-from-top-4">
            <ul className="container mx-auto px-4 py-4 space-y-3">
              <li>
                <a 
                  href="#hero" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Главная
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Услуги
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  О компании
                </a>
              </li>

              <li>
                <a 
                  href="#calculator" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Калькулятор
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#contacts" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакты
                </a>
              </li>
              <li className="pt-2">
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  Связаться
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>

      <section id="hero" className="relative bg-secondary text-secondary-foreground py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Грузоперевозки сыпучих материалов
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Доставляем песок, щебень, грунт, уголь и другие сыпучие материалы по г. Хабаровск и району. Честный вес и гарантия сроков.
            </p>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="text-base" asChild>
                  <a href="tel:446070">
                    <Icon name="Phone" className="mr-2" size={20} />
                    44-60-70
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-base bg-white/10 border-white/20 hover:bg-white/20" asChild>
                  <a href="tel:+79940645474">
                    <Icon name="Smartphone" className="mr-2" size={20} />
                    +7 994 064-54-74
                  </a>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="text-base bg-[#25D366] hover:bg-[#20BA5A] border-0" asChild>
                  <a href="https://wa.me/79940645474" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </Button>
                <Button size="lg" className="text-base bg-[#0088cc] hover:bg-[#0077b5] border-0" asChild>
                  <a href="https://t.me/79940645474" target="_blank" rel="noopener noreferrer">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2 fill-white">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 hidden lg:block">
          <img 
            src="https://cdn.poehali.dev/projects/1f4fcdc9-95cf-44b6-97c6-dc28d02f9155/files/bc72d293-ebe1-4154-8bdb-a97c2734cb2a.jpg" 
            alt="Truck" 
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Специализируемся на перевозке различных типов сыпучих материалов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Mountain', title: 'Песок', desc: 'Речной и карьерный песок всех фракций' },
              { icon: 'Gem', title: 'Щебень и смеси', desc: 'Фракции 5-10мм, 5-20мм, 20-40мм, 40-70мм, 25-60мм, 100-200мм, разногабаритный. Смеси С-11, С-5, С-4, С-4 (М800), отсев' },
              { icon: 'LandPlot', title: 'Грунт', desc: 'Плодородный и строительный грунт' },
              { icon: 'Flame', title: 'Уголь', desc: 'Ачинский, Хакаский (сеяный и нет)' },
              { icon: 'Package', title: 'ПГС', desc: 'Песчано-гравийная смесь' },
              { icon: 'Boxes', title: 'Другое', desc: 'Индивидуальные решения' }
            ].map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Работаем на рынке грузоперевозок сыпучих материалов в Хабаровске более 10 лет. 
                Гарантируем честный вес материалов и соблюдение сроков доставки.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Scale', text: 'Честный вес — взвешивание на месте' },
                  { icon: 'Clock', text: 'Доставка точно в срок' },
                  { icon: 'Shield', text: 'Гарантия качества материалов' },
                  { icon: 'Users', text: 'Опытные водители со стажем' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name={item.icon} size={20} className="text-primary flex-shrink-0" />
                    <span className="text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://cdn.poehali.dev/projects/1f4fcdc9-95cf-44b6-97c6-dc28d02f9155/files/80cc8b6e-12e8-4c63-98fa-7ceae2258ac6.jpg" 
                alt="Materials" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>



      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl">Калькулятор стоимости</CardTitle>
                <CardDescription>Рассчитайте примерную стоимость доставки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="weight">Вес груза (тонн)</Label>
                    <Input 
                      id="weight" 
                      type="number" 
                      placeholder="10"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volume">Объём (м³)</Label>
                    <Input 
                      id="volume" 
                      type="number" 
                      placeholder="15"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="distance">Расстояние (км)</Label>
                  <Input 
                    id="distance" 
                    type="number" 
                    placeholder="50"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                  />
                </div>
                <Button onClick={calculateCost} className="w-full" size="lg">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Рассчитать
                </Button>
                {cost !== null && (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center animate-in fade-in slide-in-from-bottom-4">
                    <p className="text-sm text-muted-foreground mb-2">Примерная стоимость:</p>
                    <p className="text-4xl font-bold text-primary">{cost.toLocaleString()} ₽</p>
                    <p className="text-xs text-muted-foreground mt-2">Итоговая стоимость уточняется при оформлении заказа</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Вопросы и ответы</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Какая минимальная партия для доставки?
                </AccordionTrigger>
                <AccordionContent>
                  Минимальная партия составляет 10 тонн. Для меньших объёмов возможна доставка с доплатой.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Как быстро вы доставите материал?
                </AccordionTrigger>
                <AccordionContent>
                  Стандартная доставка — в течение 1-2 дней с момента заказа. Срочная доставка — в день заказа при наличии свободной техники.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Предоставляете ли вы сертификаты на материалы?
                </AccordionTrigger>
                <AccordionContent>
                  Да, на все материалы предоставляются сертификаты качества и паспорта.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Какие способы оплаты вы принимаете?
                </AccordionTrigger>
                <AccordionContent>
                  Принимаем наличный и безналичный расчёт. Для юридических лиц возможна отсрочка платежа.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Работаете ли вы в выходные дни?
                </AccordionTrigger>
                <AccordionContent>
                  Да, работаем без выходных. Заказы принимаем круглосуточно.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium mb-1">Телефон</p>
                        <div className="space-y-1">
                          <a href="tel:446070" className="text-sm opacity-80 hover:text-primary transition-colors block">44-60-70</a>
                          <a href="tel:+79940645474" className="text-sm opacity-80 hover:text-primary transition-colors block">+7 994 064-54-74</a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <a href="mailto:stramilov82@mail.ru" className="text-sm opacity-80 hover:text-primary transition-colors">stramilov82@mail.ru</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="MessageCircle" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium mb-1">Мессенджеры</p>
                        <div className="flex gap-4 mt-2">
                          <a href="https://wa.me/79940645474" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#25D366] hover:bg-[#20BA5A] transition-colors flex items-center justify-center" title="WhatsApp">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                          </a>
                          <a href="https://t.me/446070" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0088cc] hover:bg-[#0077b5] transition-colors flex items-center justify-center" title="Telegram">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
                              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-medium mb-1">Режим работы</p>
                        <p className="text-sm opacity-80">Круглосуточно, без выходных</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 border-white/20">
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" className="bg-white/10 border-white/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact">Телефон или email</Label>
                      <Input id="contact" placeholder="44-60-70" className="bg-white/10 border-white/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение</Label>
                      <Input id="message" placeholder="Опишите ваш запрос" className="bg-white/10 border-white/20" />
                    </div>
                    <Button className="w-full">Отправить заявку</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-8 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Truck" size={24} className="text-primary" />
              <span className="font-bold">ТрансСыпучие</span>
            </div>
            <p className="text-sm opacity-80">© 2024 ТрансСыпучие. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;