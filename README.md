# PI2020-1

# Passo a passo para preparar o ambiente de desenvolvimento

- Sugiro a instalação do VS Code para o desenvolvimento por ser leve e eficiente. Download: https://aka.ms/win32-x64-user-stable.
  
- Instalar o NodeJS: https://nodejs.org/dist/v12.16.1/node-v12.16.1-x64.msi.

- Para executar e testar utilizamos o expo. Executar "npm install -g expo-cli" para instalar.

- Instalar também o app Expo no seu android ou iphone para poder testar.

- Clonar o projeto.

- Abrir a pasta do projeto no VS Code.

- Executar no terminal "npm install".

- Para rodar: "expo start". Será aberta uma página no navegador com um QR Code. Selecione o tipo de conexão "tunnel" e, com o celular na mesma rede wifi do pc, leia o QR Code no app do expo no android ou pela camera do iphone.

# Funcionalidades citadas no wpp
- O motorista cadastra seus passageiros e os dias e horários que cada um utilizará seus serviços.
- O motorista define com quanto tempo de antecedência o app deve notificar os passageiros solicitando a confirmação da presença.
- Sistema notifica automaticamente o passageiro lembrando-o de avisar caso não vá utilizar a van no dia.
- Caso a pessoa informe no app que não utilizará a van no dia, o sistema notifica o motorista.
- Em uma "versão para pais", o app deve exibir a localização da van em tempo real.
