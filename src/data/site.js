// Datos de contacto y contenido base. Textos en borrador: se validan con Martin y se respaldan con fuentes.
export const contact = {
  whatsapp: '56942542118',
  whatsappLabel: '+56 9 4254 2118',
  email: 'proyectos@ambienteozono.com',
  instagram: 'https://www.instagram.com/ambienteozono/',
};

export const waLink = (msg = 'Hola, quiero evaluar el uso de ozono en mi proceso.') =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;

export const nav = [
  { href: '/soluciones', label: 'Soluciones' },
  { href: '/#sewec', label: 'Sewec Ozon' },
  { href: '/somos-ao3', label: 'Somos AO3' },
  { href: '/preguntas-frecuentes', label: 'Preguntas' },
  { href: '/blog', label: 'Blog' },
];

export const facts = [
  { value: '2,07 V', label: 'Potencial de oxidación del ozono. El cloro llega a 1,36 V.' },
  { value: 'GRAS', label: 'Reconocido por FDA y USDA para contacto directo con alimentos desde 2001.' },
  { value: '2 g – 12 kg', label: 'De ozono por hora y por unidad en la línea Sewec Ozon.' },
  { value: 'O₃ → O₂', label: 'Después de actuar, el ozono vuelve a ser oxígeno.' },
];

export const industries = [
  {
    id: 'agua', name: 'Agua potable y de proceso', short: 'Agua',
    problem: 'Bacterias, virus, hierro y manganeso disueltos, olores y sabores que obligan a dosificar cloro y otros químicos.',
    action: 'El ozono desinfecta y oxida en minutos. Precipita hierro y manganeso para filtrarlos y elimina compuestos que dan olor y sabor.',
    benefits: ['Menos cloro y químicos almacenados', 'Agua sin olor ni sabor residual', 'Desinfección rápida y medible'],
  },
  {
    id: 'alimentos', name: 'Industria de alimentos', short: 'Alimentos',
    problem: 'Carga microbiana en frutas, hortalizas, superficies y cámaras, que acorta la vida útil y genera mermas.',
    action: 'Agua ozonizada para lavado y ozono gaseoso controlado en cámaras de frío y salas de proceso.',
    benefits: ['Mayor vida útil del producto', 'Reconocido como seguro (GRAS) para contacto con alimentos', 'Sin residuos químicos en el producto'],
  },
  {
    id: 'aire', name: 'Aire y ambientes', short: 'Aire',
    problem: 'Olores persistentes y contaminación microbiana en salas, cámaras y espacios cerrados.',
    action: 'Aplicación de ozono controlada por medición, en ambientes desocupados o en concentraciones seguras.',
    benefits: ['Control de olores en el origen', 'Desinfección de ambientes completos', 'Ozono residual destruido antes del reingreso'],
  },
  {
    id: 'riego', name: 'Riego agrícola', short: 'Riego',
    problem: 'Agua de riego con patógenos y biofilm que tapa goteros y transmite enfermedades al cultivo.',
    action: 'Ozonización del agua antes de la red de riego para desinfectarla y controlar la formación de biofilm.',
    benefits: ['Goteros y líneas más limpias', 'Menor riesgo sanitario para el cultivo', 'Menos productos químicos en el campo'],
  },
  {
    id: 'mineria', name: 'Minería', short: 'Minería',
    problem: 'Aguas de proceso y efluentes con compuestos difíciles de tratar y exigencias crecientes de reutilización.',
    action: 'Oxidación avanzada con ozono para compuestos como cianuro y metales disueltos, y acondicionamiento de agua para reúso.',
    benefits: ['Tratamiento sin agregar químicos persistentes', 'Apoyo a la reutilización de agua', 'Sistemas en contenedor para faena'],
  },
  {
    id: 'residuales', name: 'Aguas residuales', short: 'Residuales',
    problem: 'Olores, color y carga orgánica que dificultan cumplir la norma de descarga o reutilizar el agua.',
    action: 'Ozono como etapa de pulido y desinfección final, combinable con UV.',
    benefits: ['Reducción de color y olor', 'Desinfección final antes de descargar o reutilizar', 'Integración con plantas existentes'],
  },
];

export const sewecLine = [
  { name: 'Generadores de ozono', note: 'Desde 2 g hasta más de 12 kg de O₃ por hora por unidad.' },
  { name: 'Sistemas de inyección y mezcla', note: 'Llevan el ozono al agua con la transferencia que el proceso necesita.' },
  { name: 'Destructores de ozono residual', note: 'Eliminan el ozono que no reaccionó antes de liberar el aire.' },
  { name: 'Sistemas ozono + UV', note: 'Combinan ambas tecnologías para desinfección y oxidación avanzada.' },
  { name: 'Sistemas en contenedor', note: 'Plantas completas, listas para instalar en terreno.' },
  { name: 'Medición y control', note: 'Monitorean la concentración para operar con seguridad.' },
];

export const process = [
  { title: 'Diagnóstico sin costo', text: 'Entendemos tu proceso, el problema y las condiciones del agua o del ambiente.' },
  { title: 'Diseño a medida', text: 'Dimensionamos el sistema: capacidad, punto de inyección, control y seguridad.' },
  { title: 'Arriendo o compra', text: 'Arriendo con opción de compra: 3 meses para validar resultados en tu operación, o compra directa.' },
  { title: 'Instalación', text: 'Montaje y puesta en marcha con el estándar de precisión que nos distingue.' },
  { title: 'Verificación periódica', text: 'Chequeos técnicos para que el sistema siga rindiendo lo que se diseñó.' },
];

export const faqs = [
  { q: '¿Qué es el ozono?', a: 'Es una molécula formada por tres átomos de oxígeno (O₃). Es un oxidante natural, presente en la atmósfera, y es inestable: después de actuar vuelve a ser oxígeno (O₂).' },
  { q: '¿Cómo se genera el ozono?', a: 'Se produce en el mismo lugar donde se usa, a partir de aire u oxígeno, mediante una descarga eléctrica controlada. No se transporta ni se almacena.' },
  { q: '¿Cómo actúa el ozono?', a: 'Oxida la pared celular de bacterias, hongos y virus, y descompone los compuestos que generan olor, color o sabor. Luego se descompone en oxígeno.' },
  { q: '¿El ozono es dañino?', a: 'Como todo oxidante, en concentraciones altas en el aire irrita las vías respiratorias. Por eso cada sistema se dimensiona para su uso, se controla con equipos de medición e incluye destructores de ozono residual.' },
];

export const posts = [
  { title: 'El ozono en la industria de la panadería y repostería', date: '24-11-2022', url: 'https://www.ambienteozono.cl/2022/11/24/el-ozono-en-la-industria-de-lapanaderia-y-reposteria/', tag: 'Alimentos' },
  { title: '¿Por qué elegir el ozono como alternativa de sanitización?', date: '24-11-2022', url: 'https://www.ambienteozono.cl/2022/11/24/por-que-eliges-el-ozono-como-una-alternativa-de-sanitizacion/', tag: 'Sanitización' },
  { title: 'Tratamientos con ozono para aguas de riego', date: '24-11-2022', url: 'https://www.ambienteozono.cl/2022/11/24/tratamientos-con-ozono-para-aguas-de-riego/', tag: 'Riego' },
];
