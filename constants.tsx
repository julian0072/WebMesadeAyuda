
import { ChannelItem } from './types';

export const ACCESS_CHANNELS: ChannelItem[] = [
  {
    id: 'bada',
    icon: 'door_open',
    title: 'BADA',
    description: 'Ingreso Buenos Aires Desde Adentro',
    url: 'https://badesdeadentro.gob.ar/user/login?destination=/3'
  },
  {
    id: 'identity',
    icon: 'fingerprint',
    title: 'Cambio de clave',
    description: 'Gestión de usuarios y accesos.',
    url: 'https://identidad.buenosaires.gob.ar/'
  },
  {
    id: 'sade',
    icon: 'description',
    title: 'SADE',
    description: 'Documentación Electrónica GCBA.',
    url: 'https://cas.buenosaires.gob.ar/acceso/login/login.zul?service=http://eut.gcba.gob.ar/gedo-web'
  },
  {
    id: 'sigaf-sys',
    icon: 'account_balance',
    title: 'SIGAF',
    description: 'Sistema Integrado de Gestion',
    url: 'https://sigaf.gcba.gob.ar/'
  },
  {
    id: 'sigaf-web',
    icon: 'account_balance_wallet',
    title: 'SIGAF Web',
    description: 'Gestión Económico Financiera.',
    url: 'https://sigafweb.gcba.gob.ar/CORE/Login.aspx?ReturnUrl=%2fCore'
  },
  {
    id: 'sial',
    icon: 'apartment',
    title: 'SIAL',
    description: 'Monitoreo y administración local.',
    url: 'https://sial.gcba.gob.ar/'
  },
  {
    id: 'correo',
    icon: 'mail',
    title: 'Correo',
    description: 'Configuración corporativa.',
    url: 'https://outlook.office.com/mail/'
  },
  {
    id: 'pin-lexmark',
    icon: 'print',
    title: 'Pin Lexmark',
    description: 'Configuración de PIN',
    url: 'http://10.10.8.36:5252/Account/Login?ReturnUrl=%2f'
  },
  {
    id: 'equipo-ba',
    icon: 'groups',
    title: 'Equipo BA',
    description: 'Portal del empleado GCBA',
    url: 'https://equipoba.buenosaires.gob.ar'
  },
  {
    id: 'ba-compras',
    icon: 'shopping_cart',
    title: 'BA-Compras',
    description: 'Compras y contrataciones del estado',
    url: 'https://www.buenosairescompras.gob.ar/'
  },
  {
    id: 'isc',
    icon: 'school',
    title: 'ISC',
    description: 'Acceso al Instituto Superior de la Carrera',
    url: 'https://oauth2-server.apps.buenosaires.gob.ar/oidc/authorize?client_id=ISCPortal&redirect_uri=https%3A%2F%2Fisc.buenosaires.gob.ar%2F&response_type=id_token%20token&scope=openid&state=OpenIdConnect.AuthenticationProperties%3DxqHd11GkAPnRvpwqJHnLHBG-ulr608SV7RM2iOBU4z5FQ-tOCEODKiQDJMnkpmidS4FjUO6xt6H1O9B02Wo9cZbRY-ddMg6x14TgLrhVZYHqT047nYk6xX_Sp7bW7uwKf9FL4PSs7CnD4_B18k-fblrCTJwytg0MpCx9R8hIiplmYofWsfUVn5g7w1N1HVT3xb8Y6cLMMfok8uiWCc8fiRzlvAXRcpdNyqCT_Gj1TYzxFoeUkIJnt6P-cuj9WXhT-joJLWwir4NIwc-RVsC2xVArhMqHyDgJlsETc5kdv0McqGqZbMqMNqyEe5BRzXslcJ5ZjETCUXZP1S3D4FfCdKmlZZ_VW0U7MCodwPhwsMypZYkESO1CNvz0p-VFBCpk20WfbWGp9bfBkHXX1hgrtA&response_mode=form_post&nonce=638333182388747883.YjE3N2M4ODMtMDI0Ni00NDRlLWI3NDEtNWE5ZDg0MTg4NTAyYmFmMjA1YmUtMjY3NC00ODA0LWEyMzktYjUxNTFhNzVhMGVj&ui_locales=es-ES&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0'
  },
  {
    id: 'boletin-oficial',
    icon: 'article',
    title: 'Boletin Oficial',
    description: 'Normativas vigentes en la ciudad',
    url: 'https://boletinoficial.buenosaires.gob.ar/'
  },
  {
    id: 'boletin-sin',
    icon: 'policy',
    title: 'Boletin S.I.N',
    description: 'Sistema de información Normativa',
    url: 'https://boletinoficial.buenosaires.gob.ar/normativa'
  },
  {
    id: 'asi',
    icon: 'confirmation_number',
    title: 'Ticket ASI',
    description: 'Sistema de Ticket ASI',
    url: 'https://noc-mesa.buenosaires.gob.ar/'
  },
  {
    id: 'portal-gcba',
    icon: 'public',
    title: 'Portal GCBA',
    description: 'Acceso a sistemas y aplicacione GCBA',
    url: 'https://sso.apps.buenosaires.gob.ar/assets/login.php'
  },
];

export const GUIDE_ITEMS: ChannelItem[] = [
  {
    id: 'guia-sade',
    icon: 'picture_as_pdf',
    title: 'Guía SADE - Inicio',
    description: 'Manual básico para nuevos usuarios de SADE.',
    url: '#'
  },
  {
    id: 'guia-sigaf',
    icon: 'picture_as_pdf',
    title: 'Instructivo SIGAF',
    description: 'Pasos para gestión de gastos y presupuestos.',
    url: '#'
  },
  {
    id: 'guia-correo',
    icon: 'picture_as_pdf',
    title: 'Configuración Correo',
    description: 'Cómo configurar Outlook en dispositivos.',
    url: '#'
  },
  {
    id: 'guia-vpn',
    icon: 'picture_as_pdf',
    title: 'Acceso VPN',
    description: 'Instructivo para conexión remota segura.',
    url: '#'
  },
  {
    id: 'guia-firma',
    icon: 'picture_as_pdf',
    title: 'Firma Digital',
    description: 'Proceso de solicitud y validación de firma.',
    url: '#'
  },
  {
    id: 'guia-sial',
    icon: 'picture_as_pdf',
    title: 'Manual SIAL',
    description: 'Guía completa del sistema de monitoreo.',
    url: '#'
  }
];

export const GUIDE_CHANNELS: ChannelItem[] = [
  { id: 'g1', icon: 'picture_as_pdf', title: 'Guía SADE', description: 'Manual de usuario SADE', url: '#' },
  { id: 'g2', icon: 'picture_as_pdf', title: 'Guía SIGAF', description: 'Manual de usuario SIGAF', url: '#' },
  { id: 'g3', icon: 'picture_as_pdf', title: 'Guía SIAL', description: 'Manual de usuario SIAL', url: '#' },
  { id: 'g4', icon: 'picture_as_pdf', title: 'Guía Correo', description: 'Configuración de correo', url: '#' },
  { id: 'g5', icon: 'picture_as_pdf', title: 'Guía Lexmark', description: 'Manual de impresión', url: '#' },
  { id: 'g6', icon: 'picture_as_pdf', title: 'Guía Obras', description: 'Manual BA-Obras', url: '#' },
  { id: 'g7', icon: 'picture_as_pdf', title: 'Guía Compras', description: 'Manual BA-Compras', url: '#' },
  { id: 'g8', icon: 'picture_as_pdf', title: 'Guía ISC', description: 'Manual de capacitación', url: '#' },
  { id: 'g9', icon: 'picture_as_pdf', title: 'Guía Boletín', description: 'Manual Boletín Oficial', url: '#' },
  { id: 'g10', icon: 'picture_as_pdf', title: 'Guía ASI', description: 'Manual de tickets ASI', url: '#' },
  { id: 'g11', icon: 'picture_as_pdf', title: 'Guía Portal', description: 'Manual Portal GCBA', url: '#' },
  { id: 'g12', icon: 'picture_as_pdf', title: 'Guía Claves', description: 'Manual Cambio de Clave', url: '#' },
  { id: 'g13', icon: 'picture_as_pdf', title: 'Guía BADA', description: 'Manual de ingreso BADA', url: '#' },
  { id: 'g14', icon: 'picture_as_pdf', title: 'Guía VPN', description: 'Manual de acceso remoto', url: '#' },
  { id: 'g15', icon: 'picture_as_pdf', title: 'Guía Soporte', description: 'Manual de soporte técnico', url: '#' },
];

export const SYSTEM_PROMPT = `
Eres el Asistente de IA del Ministerio de Justicia y Seguridad del Gobierno de la Ciudad de Buenos Aires (GCBA).
Tu objetivo es ayudar a los empleados y personal técnico con dudas sobre los sistemas internos como:
- SADE (Sistema de Administración de Documentos Electrónicos)
- SIGAF (Sistema Integrado de Gestión y Administración Financiera)
- SIAL (Sistema Integral de Administración de Localidades/Monitoreo)
- Soporte de Identidad y Accesos (Mesa de Ayuda)
- Consultas de Mail Central corporativo.

Responde de manera profesional, concisa y amable. Si el usuario pregunta algo fuera del ámbito técnico del ministerio, redirígelo amablemente a los canales oficiales.
Habla en español rioplatense (tú/vos) si es apropiado pero mantén la formalidad institucional.
`;
