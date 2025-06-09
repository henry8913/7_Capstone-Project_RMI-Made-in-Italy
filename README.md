
<h1 align="center"> 
  <img src="https://readme-typing-svg.herokuapp.com/?font=Iosevka&size=30&color=d4af37&center=true&vCenter=true&width=800&height=60&lines=🚗+RMI+Made+in+Italy+-+Capstone+Project&repeat=false" alt="🚗 RMI Made in Italy - Capstone Project"> 
</h1> 

> 🚧 **Attenzione:** Questo progetto è attualmente in fase di sviluppo attivo. Funzionalità e documentazione sono soggette a cambiamenti frequenti.

<div align="center">
  <img src="./img/cover_a.gif" alt="RMI Made in Italy" width="100%" />
</div>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/henry8913/henry8913/output/pacman-contribution-graph-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/henry8913/henry8913/output/pacman-contribution-graph.svg">
  <img alt="pacman contribution graph" src="https://raw.githubusercontent.com/henry8913/henry8913/output/pacman-contribution-graph.svg">
</picture>

## 📋 Panoramica del Progetto

RMI Made in Italy è una piattaforma completa dedicata al restauro, personalizzazione e manutenzione di auto d'epoca di lusso. Il progetto è composto da tre componenti principali:

1. **Front-end**: Interfaccia utente reattiva e moderna sviluppata con React e Tailwind CSS
2. **Back-end**: API RESTful basata su Node.js, Express e MongoDB
3. **AI Driving Assistant**: Assistente virtuale intelligente basato su Python e Flask

### 🌟 Caratteristiche Principali

- **Catalogo Interattivo**: Esplora una collezione curata di auto d'epoca e restomods
- **Configuratore Personalizzato**: Crea la tua auto personalizzata con opzioni dettagliate
- **Gestione Profilo**: Registrazione utente, wishlist e prenotazioni test drive
- **Assistente Virtuale**: HenryAI, un assistente AI specializzato in auto d'epoca
- **Pagamenti Sicuri**: Integrazione con Stripe per transazioni sicure (modalità simulazione)
- **Design Responsive**: Esperienza utente ottimizzata su tutti i dispositivi

## 🔄 Gestione del Monorepo

Il progetto adotta una struttura **monorepo** per facilitare la gestione dei vari componenti tramite due script Bash:

### `setup_monorepo.sh`
- Configura le repository remote per **Frontend**, **Backend**, **AI Driving Assistant** ed **Extensions**
- Permette di specificare il branch di ciascuna repository (`main` di default)
- Importa il codice tramite `git subtree`
- Preserva la cronologia dei commit

### `push_subtrees.sh`
- Aggiorna le repository individuali di **Frontend**, **Backend**, **AI Driving Assistant** ed **Extensions**
- Esegue il push delle modifiche tramite `git subtree` sui branch configurati
- Mantiene sincronizzati tutti i repository

#### Come utilizzare gli script

```bash
# Rendi gli script eseguibili
chmod +x setup_monorepo.sh
chmod +x push_subtrees.sh

# Setup iniziale del monorepo
./setup_monorepo.sh

# Push delle modifiche ai subtrees
./push_subtrees.sh
```

## 🧩 Componenti del Progetto

### 🖥️ Front-end

L'interfaccia utente è sviluppata con React 18, Vite e Tailwind CSS, offrendo un'esperienza moderna e reattiva.

**Tecnologie principali:**
- React 18 con Hooks
- Vite come build tool
- Tailwind CSS per lo styling
- React Router per la navigazione
- Axios per le chiamate API
- Framer Motion per le animazioni

[Maggiori dettagli nel README del Front-end](./Front-end/README.md)

### ⚙️ Back-end

Il server è basato su Node.js ed Express, con MongoDB come database, fornendo un'API RESTful completa.

**Tecnologie principali:**
- Node.js e Express.js
- MongoDB con Mongoose
- JWT per l'autenticazione
- Passport.js per la gestione delle sessioni
- Stripe per i pagamenti (modalità simulazione)
- SendGrid per le email

[Maggiori dettagli nel README del Back-end](./Back-end/README.md)

### 🤖 AI Driving Assistant

HenryAI è un assistente virtuale specializzato in auto d'epoca, sviluppato con Python e Flask, integrato con API di intelligenza artificiale.

**Tecnologie principali:**
- Python
- Flask
- OpenRouter API
- MongoDB per la persistenza delle conversazioni
- Flask-CORS per la gestione delle richieste cross-origin

[Maggiori dettagli nel README dell'AI Driving Assistant](./AI%20Driving%20Assistant/README.md)

## 🚀 Come Iniziare

Per eseguire l'intero progetto localmente, segui questi passaggi:

1. **Clona il repository**
   ```bash
   git clone https://github.com/henry8913/7_Capstone-Project_RMI-Made-in-Italy.git
   cd 7_Capstone-Project_RMI-Made-in-Italy
   ```

2. **Configura il Back-end**
   ```bash
   cd Back-end
   cp .env.example .env  # Configura le variabili d'ambiente
   npm install
   npm run dev
   ```

3. **Configura il Front-end**
   ```bash
   cd ../Front-end
   cp .env.example .env  # Configura le variabili d'ambiente
   npm install
   npm run dev
   ```

4. **Configura l'AI Driving Assistant**
   ```bash
   cd ../AI\ Driving\ Assistant
   cp .env.example .env  # Configura le variabili d'ambiente
   pip install -r requirements.txt
   python HenryAI.py
   ```

> **Nota:** Per istruzioni dettagliate su ciascun componente, consulta i README specifici nelle rispettive cartelle.

## 📦 Repository Individuali

- [Frontend](https://github.com/henry8913/7_RMI-Made-in-Italy_Front-end)
- [Backend](https://github.com/henry8913/7_RMI-Made-in-Italy_Back-end)
- [AI Driving Assistant](https://github.com/henry8913/7_RMI-Made-in-Italy_AI-Driving-Assistant)
- [Extensions](https://github.com/henry8913/7_RMI-Made-in-Italy_Extensions)
- [DevLab](https://github.com/henry8913/7_RMI-Made-in-Italy_DevLab.git)

## 📝 Nota sui Pagamenti

Questo progetto utilizza Stripe in modalità test per simulare i pagamenti. **Nessuna transazione reale viene elaborata**. Per testare la funzionalità di pagamento, usa i seguenti dati di test:

- **Numero carta**: 4242 4242 4242 4242
- **Data scadenza**: Qualsiasi data futura
- **CVC**: Qualsiasi numero a 3 cifre

## 👤 Autore

Progetto creato da [Henry](https://github.com/henry8913).

## 📫 Contatti

<div align="center">

[![Website](https://img.shields.io/badge/-Website-000000?style=for-the-badge&logo=web&logoColor=white)](https://henrygdeveloper.com/)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/henry-k-grecchi-555454254)
[![Email](https://img.shields.io/badge/-Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:henry8913@hotmail.it)
[![WhatsApp](https://img.shields.io/badge/-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://api.whatsapp.com/send/?phone=393926936916&text&type=phone_number&app_absent=0)

</div>

<img src="./img/cover.jpg" alt="Cover" width="100%" />

---

## 📄 Licenza

Questo progetto è rilasciato sotto licenza [GNU GPLv3](LICENSE.txt).
