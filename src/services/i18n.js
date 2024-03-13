import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { setCookie } from './cookies';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

i18n.use(initReactI18next).init({

  lng: "pt", // Idioma padrão
  resources:
      {
        "en": {
          "translation": {
            "introText": "I am an artificial intelligence trained to make the lives of Lawyers and Law Students infinitely easier. I'm available 24/7 via Telegram.",
            "start": "Start free",
            "pricing": "Pricing",
            "ordem_p1": "Your wish is",
            "ordem_p2": "my command",
            "aboutUs": "About Us",
            "text7": "It's not magic.",
            "text8": "It's artificial intelligence.",
            "text9": "See how easy it is to use me.",
            "text10": "Open a conversation with Lawyer Lamp on Telegram.",
            "text11": "Start the conversation with a single click",
            "text12": "Ask questions and get the answers.",
            "text13": "Much more precision and legal effectiveness",
            "text14": " I revise and edit your petitions.",
            "text15": " I inform about changes in legislation.",
            "text16": " I offer insights on judicial decisions.",
            "text17": " I prepare questions for interrogations.",
            "text18": " I correct and analyze your legal texts",
            "text19": "Speed up research and document drafting",
            "text20": "I conduct legal searches in seconds.",
            "text21": "I draft legal documents, such as contracts and petitions.",
            "text22": "Case and thesis analysis.",
            "text23": "I generate summaries of relevant laws and statutes.",
            "text24": "I assist in creating your legal databases.",
            "text25": "Get a lot more done in a lot less time",
            "text26": "I streamline the preparation of your arguments.",
            "text27": "I automate case file organization.",
            "text28": "I manage deadlines for your cases.",
            "text29": "I prepare presentations for trials.",
            "text30": "I facilitate communication in legal teams.",
            "text31": "You can test for free right now",
            "text32": "Get done in minutes what others take hours to do. No, I'm not exaggerating.",
            "text33": "Try For Free",
            "text34": "Frequently Asked Questions",
            "text35": "Is Lawyer Lamp a customer service chat?",
            "text36": "No. Although it can provide support and answer questions related to the legal field, the main purpose of Lawyer Lamp is to assist lawyers and law students in their professional activities. It offers specific resources for legal information research, guidance in drafting documents, and legal insights.",
            "text37": "Does ChatGPT do the same thing as Lawyer Lamp for free?",
            "text38": "No, ChatGPT doesn't offer the same features as Lawyer Lamp. While ChatGPT can answer general questions, Lawyer Lamp is specifically designed to assist lawyers and law students in their legal tasks.",
            "text39": "Does Lawyer Lamp have any integration with ChatGPT?",
            "text40": "No, Lawyer Lamp and ChatGPT are separate AI models with distinct functionalities. Lawyer Lamp focuses on legal assistance, while ChatGPT is a general-purpose language model.",
            "text41": "What if I don't know how to use Lawyer Lamp?",
            "text42": "No need to worry! Lawyer Lamp is designed to be user-friendly. You can start using it with ease, and if you ever have questions, there's a support team available to assist you.",
            "text43": "Does Lawyer Lamp make up answers?",
            "text44": "No, Lawyer Lamp doesn't make up answers. It provides accurate and reliable legal information based on its training data. However, it's essential to verify the information in your specific legal context.",
            "text45": "Is Lawyer Lamp updated on recent laws?",
            "text46": "Yes, Lawyer Lamp is regularly updated to stay current with changes in legislation and legal trends. It strives to provide the most up-to-date information.",
            "text47": "In which countries/languages does Lawyer Lamp work?",
            "text48": "Lawyer Lamp is primarily designed for English-speaking users, but it can assist with legal tasks in various countries and languages. Its effectiveness may vary depending on the jurisdiction and language.",

            "navBar":{
              "text1": "Log in",
              "text2": "Start Free",
            },
            "general":{
              "text1": "Settings ",
              "text2": "Log out ",
              "text3": "General",
              "text4":"Billing",
              "text5":"Plans",
              "text6":"Account info",
              "text7":"Name",
              "text8":"Telegram username",
              "text9":"Current e-mail",
              "text10": "New e-mail",
              "text11": "Password",
              "text12": "Current password",
              "text13": "New password",
              "text14": "Confirm new password",
              "text15":"Save",
              "text16":"Delete account",
              "text17":"This action cannot be undone.",
              "text18":"Delete",

            },
            "billing":{
              "text1": "Setting",
              "text2": "Log out ",
              "text3": "General",
              "text4":"Billing",
              "text5":"Plans",
              "text6":"Active",
              "text7":"per month",
              "text8":"used",
              "text9": "Monthly limit",
              "text10": "Upgrade"
            },
            "plans":{
              "text1": "Settings",
              "text2": "General",
              "text3":"Billing",
              "text4":"Plans",
              "text5":"Select your plan",
              "text6":"Choose plan",
              "text7":"Monthly",
              "text8":"Anually",
              "text9": "upto 800 words per month",
              "text10": "per month",
              "text11":"This action can only be done through Hotmart ",
              "text12":"This action can only be done through Stripe",
              "text13":"Access your account on the Hotmart platform to upgrade.",
              "text14":"Access your account on the Stripe platform to upgrade.",
              "text15":"Click here to see the step by step.",
              "text16":"Go Hotmart",
              "text17":"Go Stripe",
            },
            "trial":{
              "text1": "Setting",
              "text2": "Log out ",
              "text3": "General",
              "text4":"Billing",
              "text5":"Plans",
              "text6":"Trial",
              "text7":"Active",
              "text8":"per month",
              "text9":"used",
              "text10": "Monthly limit:",
              "text11": "Upgrade"
            },
            "dashBoard":{
              "text1": "ILLUSTRATION",
              "text2": "Your trial ",
              "text3": "period is over",
              "text4":"Choose a plan to keep using the Lawyer Lamp!",
              "text5":"See plans",
              "text6":"Dashboard",
            },
            "pricingText":{
              "text1": "Don't get left behind",
              "text2": "You know artificial intelligence is here to stay; ",
              "text3": "those who don't use it, fall behind.",
              "text4":"Monthly",
              "text5":"Anually",
              "text6":"Start Free",
            },
            "login":{
              "text1": "Sign up for free!",
              "text2": "Don't have an account? ",
              "text3": "Log in",
              "text4":"Your email or password is incorrect, please try again",
              "text5":"Your e-mail",
              "text6":"type your e-mail",
              "text7":"Please, type a valid email.",
              "text8":"Your password",
              "text9":"Your password here",
              "text11":"Forgot password?",
            },
            "signup":{
              "text1": "Sign up for free!",
              "text2": "Don't have an account? ",
              "text3": "Beware! If you use me once, you'll want to use me forever :)",
              "text4":"Continue with e-mail",
            },
            "signupwithemail":{
              "text1": "Your name",
              "text2": "Type your name ",
              "text3": "Please, type your name",
              "text4":"Your e-mail",
              "text5":"Type your e-mail",
              "text6":"Please, type a valid email.",
              "text7":"Your password",
              "text8":"Create a password with 6 characters or more",
              "text9":"The password must contain at least 6 characters.",
              "text10":"I've read and agree with",
              "text11":"terms",
              "text12":"and",
              "text13":"privacy policy.",
              "text14":"Next",
              "text15":"Already have an account?",
              "text16":"Log in",
            },
            "telegram":{
              "text1":"Don't have a Telegram account?",
              "text2":"Create now",
              "text3":"Connect your",
              "text4":"Telegram account",
              "text5":"Enter your Telegram username",
              "text6":"to connect it to our platform.",
              "text7":"Telegram username",
              "text8":"Type your telegram username",
              "text9":"Username not found.",
              "text10":"Finish",
            },
            "resendEmail":{
              "text1":"Need help?",
              "text2":"Contact us",
              "text3":"Verify your e-mail",
              "text4":"Check your email and click the link to",
              "text5":"activate your account.",
              "text6":"Resend e-mail",
            },
            "recover_password":{
              "text1":"Remembered password?",
              "text2":"Log in",
              "text3":"Forgot password?",
              "text4":"Don't worry. We will email you instructions for resetting your password.",
              "text5":"Account e-mail",
              "text6":"What is the account email?",
              "text7":"Reset Password",
            },
            "chat":{
              "text1":"New Chat",
              "text2":"Bookmarks:",
              "text3":"History:",
              "text4":"learn more",
              "text5":"Participate",
              "text7":"Ask something...",
              "text8":"Prompts library",
              "text9":"Select the prompt that best fits your needs." +
                  " After clicking on it, it will appear in the text input area. You can send it as provided or customize it further.",
              "text10":"Prompts for Contract",
              "text11":"Discuss the impacts of a breach of contract in international trade agreements.",
              "text12":"Analyze the enforceability of electronic signatures in today's digital contracts.",
              "text13":"Make update",
              "dashboardText1":"Dashboard",
              "dashboardText2":"Your monthly words limit is over.",
              "dashboardText3":"Upgrade now.",
              "dashboardText4":"Users",
              "dashboardText5":"Word used",
              "dashboardText6":"Current plan",
            },
            "drawer":{
              "text1":"Menu",
              "text2":"user name",
              "text3":"Settigns",
              "text4":"Plans",
              "text5":"Help center",
              "text6":"Log out",
            },

            "footer":{
              "text1":"Affiliate program",
              "text2":"Terms:",
              "text3":"Privacy policy:",
              "text4":"Help:",
              "text5":"get in touch",
              "text6":"Help center",
            },

          }
        },
        "pt": {
          "translation": {
            "introText": "Sou uma inteligência artificial treinada para tornar a vida de Advogados e Estudantes de Direito infinitamente mais fácil. Estou disponível 24/7 via Telegram.",
            "start": "Começar grátis",
            "pricing": "Valores",
            "ordem_p1": "Seu desejo é",
            "ordem_p2": "minha ordem",
            "aboutUs": "Sobre nós",
            "text7": "Isso não é mágica.",
            "text8": "É inteligência Artificial.",
            "text9": "Veja como é fácil me usar.",
            "text10": "Abra uma conversa com o Lawyer Lamp no Telegram.",
            "text11": "Inicie a conversa com um simples click.",
            "text12": "Faça uma pergunte e aguarde a resposta.",
            "text13": "Muito mais precisão e eficácia legal.",
            "text14": "Eu reviso e edito suas petições.",
            "text15": "Eu informo sobre mudanças na legislação.",
            "text16": "Eu ofereço insights sobre decisões judiciais.",
            "text17": "Eu preparo perguntas para interrogatórios.",
            "text18": "Eu corrijo e analiso seus textos legais.",
            "text19": "Acelere a pesquisa e elaboração de documentos",
            "text20": "Realizo pesquisas jurídicas em segundos.",
            "text21": "Elaboro documentos jurídicos, como contratos e petições.",
            "text22": "Análise de casos e teses.",
            "text23": "Gero resumos das leis e estatutos relevantes.",
            "text24": "Auxilio na criação de seus bancos de dados jurídicos.",
            "text25": "Faça muito mais em muito menos tempo",
            "text26": "Eu otimizo a preparação dos seus argumentos.",
            "text27": "Eu automatizo a organização de arquivos de casos.",
            "text28": "Eu gerencio prazos para seus casos.",
            "text29": "Eu preparo apresentações para julgamentos.",
            "text30": "Eu facilito a comunicação em equipes jurídicas.",
            "text31": "Você pode testar de graça agora mesmo",
            "text32": "Faça em minutos o que outros levam horas para fazer. Não, não estou exagerando.",
            "text33": "Teste de graça",
            "text34": "Perguntas frequentes",
            "text35": "O Lawyer Lamp é um chat de atendimento ao cliente?",
            "text36": "Não. Embora possa oferecer suporte e responder a perguntas relacionadas ao campo jurídico, o principal objetivo do Lawyer Lamp é auxiliar advogados e estudantes de direito em suas atividades profissionais. Ele oferece recursos específicos para pesquisa de informações jurídicas, orientação na elaboração de documentos e insights jurídicos.",
            "text37": "O ChatGPT faz a mesma coisa que o Lawyer Lamp de graça?",
            "text38": "Não, o ChatGPT não oferece as mesmas funcionalidades que o Lawyer Lamp. Enquanto o ChatGPT pode responder a perguntas gerais, o Lawyer Lamp é especificamente projetado para auxiliar advogados e estudantes de direito em suas tarefas jurídicas.",
            "text39": "O Lawyer Lamp tem alguma integração com o ChatGPT?",
            "text40": "Não, o Lawyer Lamp e o ChatGPT são modelos de IA separados com funcionalidades distintas. O Lawyer Lamp se concentra na assistência jurídica, enquanto o ChatGPT é um modelo de linguagem de uso geral.",
            "text41": "E se eu não souber como usar o Lawyer Lamp?",
            "text42": "Não se preocupe! O Lawyer Lamp foi projetado para ser fácil de usar. Você pode começar a usá-lo com facilidade e, se tiver alguma dúvida, há uma equipe de suporte disponível para ajudá-lo.",
            "text43": "O Lawyer Lamp inventa respostas?",
            "text44": "Não, o Lawyer Lamp não inventa respostas. Ele fornece informações jurídicas precisas e confiáveis com base em seus dados de treinamento. No entanto, é essencial verificar as informações em seu contexto jurídico específico.",
            "text45": "O Lawyer Lamp é atualizado com as leis recentes?",
            "text46": "Sim, o Lawyer Lamp é regularmente atualizado para acompanhar as mudanças na legislação e nas tendências jurídicas. Ele se esforça para fornecer as informações mais atualizadas.",
            "text47": "Em quais países/idiomas o Lawyer Lamp funciona?",
            "text48": "O Lawyer Lamp foi projetado principalmente para usuários que falam inglês, mas pode auxiliar em tarefas jurídicas em vários países e idiomas. Sua eficácia pode variar dependendo da jurisdição e do idioma.",

            "navBar":{
              "text1": "Entrar",
              "text2": "Começar gratis",
            },
            "general":{
              "text1": "Configurações",
              "text2": "Sair",
              "text3": "Geral",
              "text4":"Cobranças",
              "text5":"Planos",
              "text6":"Informações da Conta",
              "text7":"Nome",
              "text8":"Nome de usuário do telegram",
              "text9":"Email atual",
              "text10": "Novo e-mail",
              "text11": "Senha",
              "text12": "Senha atual",
              "text13": "Nova senha",
              "text14": "Confirme nova senha",
              "text15":"Salvar",
              "text16":"Deletar conta",
              "text17":"Essa ação não pode ser desfeita.",
              "text18":"Deletar",

            },
            "billing":{
              "text1": "Configurações",
              "text2": "Sair",
              "text3": "Geral",
              "text4":"Cobranças",
              "text5":"Planos",
              "text6":"Ativo",
              "text7":"por mês",
              "text8":"usados",
              "text9": "Limite mensal",
              "text10": "Atualizar",

            },
            "plans":{
              "text1": "Configurações",
              "text2": "Geral",
              "text3":"Cobranças",
              "text4":"Planos",
              "text5":"Selecione seu plano",
              "text6":"Escolha o plano",
              "text7":"Mensal",
              "text8":"Anual",
              "text9": "até 800 palavras por mês",
              "text10": "por mês",
              "text11":"Esta ação só pode ser feita através do Hotmart",
              "text12":"Esta ação só pode ser feita através do Stripe",
              "text13":"Acesse sua conta na plataforma Hotmart para fazer upgrade.",
              "text14":"Acesse sua conta na plataforma Stripe para fazer upgrade.",
              "text15":"Clique aqui para ver o passo a passo.",
              "text16":"Ir para Hotmart",
              "text17":"Ir para Stripe",
            },
            "trial":{
              "text1": "Configurações",
              "text2": "Sair",
              "text3": "Geral",
              "text4":"Cobranças",
              "text5":"Planos",
              "text6":"Teste",
              "text7":"Ativo",
              "text8":"por mês",
              "text9":"usados",
              "text10": "Limite mensal:",
              "text11": "Atualizar",

            },

            "dashBoard":{
              "text1": "ILUSTRAÇÃO",
              "text2": "Seu periodo",
              "text3": "de testes acabou",
              "text4":"Escolha um plano para continuar usando a Lawyer Lamp!",
              "text5":"Veja os planos",
              "text6":"Painel"},

            "pricingText":{
              "text1": "Não fique para trás",
              "text2": "Você sabe que a inteligência artificial veio para ficar;",
              "text3": "quem não usa fica para trás.",
              "text4":"Mensal",
              "text5":"Anual",
              "text6":"Comece gratuitamente",
            },

            "login":{
              "text1":"Cadastre-se gratuitamente!",
              "text2": "Não possui uma conta? ",
              "text3": "Entrar",
              "text4":"Seu e-mail ou senha estão incorretos, tente novamente.",
              "text5":"Seu e-mail ",
              "text6":"Digite seu e-mail",
              "text7":"Por favor, digite um e-mail válido.",
              "text8":"Sua Senha",
              "text9":"Sua senha aqui",
              "text11":"Esqueceu a senha?",
            },
            "signup":{
              "text1":"Cadastre-se gratuitamente!",
              "text2": "Não possui uma conta? ",
              "text3": "Cuidado! Se você me usar uma vez, vai querer me usar para sempre :)",
              "text4":"Continuar com e-mail",
            },
            "signupwithemail":{
              "text1": "Seu nome",
              "text2": "Digite seu nome ",
              "text3": "Por favor, digite seu nome",
              "text4":"Seu e-mail",
              "text5":"Digite seu e-mail",
              "text6":"Por favor, digite um e-mail válido.",
              "text7":"Sua senha",
              "text8":"Crie uma senha com 6 caracteres ou mais",
              "text9":"A senha deve conter pelo menos 6 caracteres.",
              "text10":"Eu li e concordo com",
              "text11":"termos",
              "text12":"e",
              "text13":"política de Privacidade.",
              "text14":"Próximo",
              "text15":"Já possui uma conta?",
              "text16":"Entrar",
            },
            "telegram":{
              "text1":"Não possui uma conta no telegram?",
              "text2":"Criar agora",
              "text3":"Conecte sua",
              "text4":"conta do telegram",
              "text5":"Entre com seu nome de usuário do Telegram",
              "text6":"para conectar a nossa plataforma.",
              "text7":"Nome de usuário do telegram",
              "text8":"Digite seu nome de usuário do telegram",
              "text9":"Nome de usuário não encontrado.",
              "text10":"Finalizar",
            },
            "resendEmail":{
              "text1":"Preciso de ajuda?",
              "text2":"Contate-nos",
              "text3":"Verifique seu e-mail",
              "text4":"Verifique seu e-mail e clique no link para",
              "text5":"ativar sua conta.",
              "text6":"Reenviar e-mail",
            },
            "recover_password":{
              "text1":"Lembra da senha?",
              "text2":"Entrar",
              "text3":"Esqueceu a senha?",
              "text4":"Não se preocupe. Enviaremos por e-mail instruções para redefinir sua senha. ",
              "text5":"E-mail da conta",
              "text6":"Qual é o e-mail da conta?",
              "text7":"Redefinir senha",
            },
            "chat":{
              "text1":"Novo Chat",
              "text2":"Favoritos:",
              "text3":"Histórico:",
              "text4":"Saiba mais:",
              "text5":"Quero Participar",
              "text7":"Pergunte alguma coisa...",
              "text8":"Biblioteca de comandos",
              "text9":"Selecione o prompt que melhor atende às suas necessidades. " +
                  "Após clicar nele, ele aparecerá na área de entrada de texto. Você pode enviá-lo conforme fornecido ou personalizá-lo ainda mais.",
              "text10":"Solicitações de direito contratual",
              "text11":"Discuta os impactos de uma quebra de contrato em acordos comerciais internacionais.",
              "text12":"Analise a aplicabilidade das assinaturas eletrônicas nos contratos digitais atuais.",
              "text13":"Fazer upgrade",
              "dashboardText1":"Painel",
              "dashboardText2":"Seu limite mensal de palavras acabou.",
              "dashboardText3":"Atualize agora.",
              "dashboardText4":"Usuários",
              "dashboardText5":"Palavras usadas",
              "dashboardText6":"Plano atual",
            },
            "drawer":{
              "text1":"Menu",
              "text2":"Nome do usuário",
              "text3":"Settings",
              "text4":"Plans",
              "text5":"Help center",
              "text6":"Log out",
            },

            "footer":{
              "text1":"Affiliate program",
              "text2":"Termos:",
              "text3":"Privacidade e politica:",
              "text4":"Ajuda:",
              "text5":"Entrar em contato",
              "text6":"Central de ajuda",
            },

          }
        }
      }
});

export default i18n;
