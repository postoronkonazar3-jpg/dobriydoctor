import {
  Stethoscope,
  Syringe,
  Activity,
  Scissors,
  Smile,
  ShieldCheck,
  Heart,
  Thermometer,
  Sparkles
} from 'lucide-react';
import React from 'react';

export interface FullServiceItem {
  id: string;
  title: string;
  price: string;
  numericPrice?: number;
  note?: string;
}

export interface FullServiceCategory {
  id: string;
  name: string;
  badge?: string;
  iconName: string;
  description: string;
  imageUrl: string;
  items: FullServiceItem[];
}

export const fullServicesCategories: FullServiceCategory[] = [
  {
    id: 'consultation',
    name: 'Консультація лікаря',
    badge: 'Первинна діагностика',
    iconName: 'Stethoscope',
    description: 'Огляд, клінічне обстеження, встановлення попереднього діагнозу та призначення індивідуальної схеми лікування.',
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'c-1', title: 'Первинний клінічний огляд тварини', price: '500.00 грн', numericPrice: 500 },
      { id: 'c-2', title: 'Вторинний огляд тварини', price: '300.00 грн', numericPrice: 300 },
      { id: 'c-3', title: 'Консультація вузького спеціаліста (дерматолог, хірург, стоматолог)', price: '700.00 грн', numericPrice: 700 },
      { id: 'c-4', title: 'Повторна консультація вузького спеціаліста (дерматолог, хірург, стоматолог)', price: '450.00 грн', numericPrice: 450 },
    ]
  },
  {
    id: 'vaccination',
    name: 'Комплексна вакцинація та чіпування',
    badge: 'Імунізація & Паспорт',
    iconName: 'Syringe',
    description: 'Надійний захист від вірусних інфекцій, мікрочіпування з внесенням до міжнародної бази та видача паспорта.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'v-1', title: 'Комплексна вакцинація (інфекційні хвороби + сказ)', price: '1,500.00 грн', numericPrice: 1500 },
      { id: 'v-2', title: 'Комплексна вакцинація від інфекційних хвороб', price: '1,200.00 грн', numericPrice: 1200 },
      { id: 'v-3', title: 'Комплексна вакцинація Нобівак DHPPI + LR', price: '1,500.00 грн', numericPrice: 1500 },
      { id: 'v-4', title: 'Комплексна вакцинація Нобівак Tricat Trio + R', price: '1,500.00 грн', numericPrice: 1500 },
      { id: 'v-5', title: 'Вакцинація від сказу', price: '600.00 грн', numericPrice: 600 },
      { id: 'v-6', title: 'Оформлення ветеринарного паспорта', price: '100.00 грн', numericPrice: 100 },
      { id: 'v-7', title: 'Чіпування тварини з реєстрацією чіпу', price: '700.00 грн', numericPrice: 700 },
    ]
  },
  {
    id: 'therapy',
    name: 'Терапевтичні процедури',
    badge: 'Інфузії & Процедури',
    iconName: 'Thermometer',
    description: 'Введення медикаментів, катетеризація та інтенсивна крапельна терапія з розрахунком швидкості введення.',
    imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 't-1', title: 'Ін’єкція: підшкірна, внутрішньом’язова', price: '100.00 грн', numericPrice: 100 },
      { id: 't-2', title: 'Встановлення внутрішньовенного катетера', price: 'від 100.00 грн', numericPrice: 100 },
      { id: 't-3', title: 'Інфузійна терапія з постійною швидкістю 1 категорії', price: 'від 450.00 грн', numericPrice: 450 },
      { id: 't-4', title: 'Інфузійна терапія з постійною швидкістю 2 категорії', price: 'від 600.00 грн', numericPrice: 600 },
      { id: 't-5', title: 'Інфузійна терапія з постійною швидкістю 3 категорії', price: 'від 700.00 грн', numericPrice: 700 },
    ]
  },
  {
    id: 'hygiene',
    name: 'Гігієнічні та лікувальні обробки',
    badge: 'Догляд & Чистка',
    iconName: 'Sparkles',
    description: 'Гігієна залоз, підрізання кігтів, отоскопічний огляд та профілактика кліщових інфекцій.',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'h-1', title: 'Обрізання кігтів котам, гризунам', price: '150.00 грн', numericPrice: 150 },
      { id: 'h-2', title: 'Обрізання кігтів собакам', price: '200.00 грн', numericPrice: 200 },
      { id: 'h-3', title: 'Видалення кліща', price: 'від 50.00 грн', numericPrice: 50 },
      { id: 'h-4', title: 'Отоскопія', price: '100.00 грн', numericPrice: 100 },
      { id: 'h-5', title: 'Спорожнення параанальних залоз котам', price: '300.00 грн', numericPrice: 300 },
      { id: 'h-6', title: 'Спорожнення параанальних залоз собакам', price: '350.00 грн', numericPrice: 350 },
      { id: 'h-7', title: 'Промивання параанальних залоз', price: '450.00 грн', numericPrice: 450 },
    ]
  },
  {
    id: 'diagnostics',
    name: 'Діагностичні процедури та аналізи',
    badge: 'Лабораторія 24/7',
    iconName: 'Activity',
    description: 'Експрес-тести, розгорнута біохімія, цитологічні, гістологічні дослідження та лабораторний аналіз біоматеріалів.',
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'd-1', title: 'Загальний аналіз крові', price: '600.00 грн', numericPrice: 600 },
      { id: 'd-2', title: 'Біохімічний аналіз крові розгорнутий', price: '1,100.00 грн', numericPrice: 1100 },
      { id: 'd-3', title: 'Комплексний аналіз крові (біохімічний та загальний)', price: '1,500.00 грн', numericPrice: 1500 },
      { id: 'd-4', title: 'Аналіз крові дирофіляріоз, цукор, згортання', price: 'від 150.00 грн', numericPrice: 150 },
      { id: 'd-5', title: 'Аналіз крові на бабезіоз', price: 'від 200.00 грн', numericPrice: 200 },
      { id: 'd-6', title: 'Аналіз крові коагулограма', price: 'від 800.00 грн', numericPrice: 800 },
      { id: 'd-7', title: 'Біохімічний аналіз крові 1 показник', price: 'від 150.00 грн', numericPrice: 150 },
      { id: 'd-8', title: 'Аналіз крові на інфекційні та паразитарні захворювання (експрес-тест)', price: 'від 650.00 грн', numericPrice: 650 },
      { id: 'd-9', title: 'Аналіз крові на гормони', price: 'від 250.00 грн', numericPrice: 250 },
      { id: 'd-10', title: 'Аналіз сечі', price: '500.00 грн', numericPrice: 500 },
      { id: 'd-11', title: 'Аналіз калу на яйця глист', price: 'від 400.00 грн', numericPrice: 400 },
      { id: 'd-12', title: 'Цитологічне дослідження (1 скло)', price: 'від 500.00 грн', numericPrice: 500 },
      { id: 'd-13', title: 'Онкоцитологія', price: 'від 800.00 грн', numericPrice: 800 },
      { id: 'd-14', title: 'Гістологічне дослідження', price: 'від 1,000.00 грн', numericPrice: 1000 },
      { id: 'd-15', title: 'Змив мазок з прямої кишки на простійших', price: 'від 600.00 грн', numericPrice: 600 },
    ]
  },
  {
    id: 'dentistry',
    name: 'Стоматологічні процедури',
    badge: 'Включено базову анестезію',
    iconName: 'Smile',
    description: 'Санація ультразвуковим скалером, видалення зубів та профілактика пародонтозу у тварин.',
    imageUrl: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'den-0', title: 'Огляд та консультація стоматолога', price: '400.00 грн', numericPrice: 400 },
      { id: 'den-1', title: 'Санація ротової порожнини УЗ-скалером коту (без дентальної візіографії та видалень)', price: '3,500.00 грн', numericPrice: 3500 },
      { id: 'den-2', title: 'Санація ротової порожнини УЗ-скалером собака до 5 кг (без дентальної візіографії та видалень)', price: '4,000.00 грн', numericPrice: 4000 },
      { id: 'den-3', title: 'Санація ротової порожнини УЗ-скалером собака 5 – 10 кг (без дентальної візіографії та видалень)', price: '4,500.00 грн', numericPrice: 4500 },
      { id: 'den-4', title: 'Санація ротової порожнини УЗ-скалером собака 10 – 20 кг (без дентальної візіографії та видалень)', price: '5,000.00 грн', numericPrice: 5000 },
      { id: 'den-5', title: 'Санація ротової порожнини УЗ-скалером собака 20 – 30 кг (без дентальної візіографії та видалень)', price: '5,500.00 грн', numericPrice: 5500 },
      { id: 'den-6', title: 'Санація ротової порожнини УЗ-скалером собака 30 – 40 кг (без дентальної візіографії та видалень)', price: '6,000.00 грн', numericPrice: 6000 },
      { id: 'den-7', title: 'Видалення постійного зубу (премоляр, моляр) І ступіню', price: '150.00 грн', numericPrice: 150 },
      { id: 'den-8', title: 'Видалення постійного зубу (премоляр, моляр) ІІ ступіню', price: '300.00 грн', numericPrice: 300 },
      { id: 'den-9', title: 'Видалення постійного зубу (премоляр, моляр) ІІІ ступіню', price: '500.00 грн', numericPrice: 500 },
    ]
  },
  {
    id: 'surgery',
    name: 'Хірургічні процедури',
    badge: 'Операційна хірургія',
    iconName: 'Scissors',
    description: 'Ургентна та планова абдомінальна, м’якотканинна хірургія. *Без урахування вартості наркозу та витратних матеріалів.',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 's-1', title: 'Хірургічна обробка ран (без наркозу та витратних матеріалів)', price: 'від 100.00 грн', numericPrice: 100 },
      { id: 's-2', title: 'Діагностична лапаратомія', price: 'від 2,500.00 грн', numericPrice: 2500 },
      { id: 's-3', title: 'Герніопластика – ушивання грижі', price: 'від 2,500.00 грн', numericPrice: 2500 },
      { id: 's-4', title: 'Ентеротомія – операція на кишечнику', price: 'від 6,000.00 грн', numericPrice: 6000 },
      { id: 's-5', title: 'Уретростомія – операція на уретрі', price: 'від 7,000.00 грн', numericPrice: 7000 },
      { id: 's-6', title: 'Цистостомія – операція на сечовому міхурі', price: 'від 5,000.00 грн', numericPrice: 5000 },
      { id: 's-7', title: 'Кесарів розтин', price: 'від 5,000.00 грн', numericPrice: 5000 },
      { id: 's-8', title: 'Видалення новоутворення', price: 'від 500.00 грн', numericPrice: 500 },
      { id: 's-9', title: 'Унілатеральна мастектомія кішки', price: '4,000.00 грн', numericPrice: 4000 },
      { id: 's-10', title: 'Унілатеральна мастектомія собаки', price: '5,000.00 грн', numericPrice: 5000 },
      { id: 's-11', title: 'Операція по усуненню пролапса слізної залози на одному оці', price: 'від 2,500.00 грн', numericPrice: 2500 },
    ]
  },
  {
    id: 'sterilization',
    name: 'Комплексна кастрація та стерилізація',
    badge: 'Включено анестезію & антибіотик',
    iconName: 'ShieldCheck',
    description: 'Малоінвазивна кастрація та стерилізація. У вартість повністю включено наркоз та антибіотикотерапію.',
    imageUrl: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'st-1', title: 'Комплексна стерилізація кішки (до 4 кг)', price: '3,000.00 грн', numericPrice: 3000 },
      { id: 'st-2', title: 'Комплексна стерилізація кішки (від 4 кг)', price: '3,000.00 грн', numericPrice: 3000 },
      { id: 'st-3', title: 'Комплексна кастрація кота (до 4 кг)', price: '2,000.00 грн', numericPrice: 2000 },
      { id: 'st-4', title: 'Комплексна кастрація кота (від 4 кг)', price: '2,500.00 грн', numericPrice: 2500 },
      { id: 'st-5', title: 'Комплексна кастрація кота крипторха (одностороннього)', price: 'від 3,500.00 грн', numericPrice: 3500 },
      { id: 'st-6', title: 'Комплексна кастрація кобеля до 5 кг', price: '3,500.00 грн', numericPrice: 3500 },
      { id: 'st-7', title: 'Комплексна кастрація кобеля від 5 до 10 кг', price: '4,500.00 грн', numericPrice: 4500 },
      { id: 'st-8', title: 'Комплексна кастрація кобеля від 10 до 15 кг', price: '5,500.00 грн', numericPrice: 5500 },
      { id: 'st-9', title: 'Комплексна кастрація кобеля від 15 до 25 кг', price: '6,500.00 грн', numericPrice: 6500 },
      { id: 'st-10', title: 'Комплексна кастрація кобеля від 25 до 35 кг', price: '7,500.00 грн', numericPrice: 7500 },
      { id: 'st-11', title: 'Комплексна стерилізація суки до 5 кг', price: '4,000.00 грн', numericPrice: 4000 },
      { id: 'st-12', title: 'Комплексна стерилізація суки від 5 до 10 кг', price: '5,000.00 грн', numericPrice: 5000 },
      { id: 'st-13', title: 'Комплексна стерилізація суки від 10 до 15 кг', price: '7,000.00 грн', numericPrice: 7000 },
      { id: 'st-14', title: 'Комплексна стерилізація суки від 15 до 25 кг', price: '7,500.00 грн', numericPrice: 7500 },
      { id: 'st-15', title: 'Комплексна стерилізація суки від 25 до 35 кг', price: '8,500.00 грн', numericPrice: 8500 },
    ]
  },
  {
    id: 'euthanasia',
    name: 'Евтаназія та ритуальні послуги',
    badge: 'Гуманна турбота',
    iconName: 'Heart',
    description: 'Гуманна гуманна седація без болю, супровід та індивідуальна / загальна кремація.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    items: [
      { id: 'e-1', title: 'Евтаназія котів та малих собак', price: '1,500.00 грн', numericPrice: 1500 },
      { id: 'e-2', title: 'Евтаназія собак великих порід', price: '2,500.00 грн', numericPrice: 2500 },
      { id: 'e-3', title: 'Евтаназія гризуна', price: '1,000.00 грн', numericPrice: 1000 },
      { id: 'e-4', title: 'Кремація індивідуальна до 10 кг', price: '3,500.00 грн', numericPrice: 3500 },
      { id: 'e-5', title: 'Кремація індивідуальна 10-25 кг', price: '3,800.00 грн', numericPrice: 3800 },
      { id: 'e-6', title: 'Кремація індивідуальна 25-40 кг', price: '4,200.00 грн', numericPrice: 4200 },
      { id: 'e-7', title: 'Кремація індивідуальна 40-50 кг', price: '4,500.00 грн', numericPrice: 4500 },
      { id: 'e-8', title: 'Кремація індивідуальна більше 50 кг', price: '5,000.00 грн', numericPrice: 5000 },
      { id: 'e-9', title: 'Кремація загальна до 10 кг', price: '2,250.00 грн', numericPrice: 2250 },
      { id: 'e-10', title: 'Кремація загальна 10-25 кг', price: '2,750.00 грн', numericPrice: 2750 },
      { id: 'e-11', title: 'Кремація загальна 25-40 кг', price: '3,650.00 грн', numericPrice: 3650 },
      { id: 'e-12', title: 'Кремація загальна 40-50 кг', price: '3,850.00 грн', numericPrice: 3850 },
      { id: 'e-13', title: 'Кремація загальна більше 50 кг', price: '4,150.00 грн', numericPrice: 4150 },
    ]
  }
];
