
# 🚗 Capstone Project: RMI Made in Italy

> 🚧 **Attenzione:** Questo progetto è attualmente in fase di sviluppo attivo. Funzionalità e documentazione sono soggette a cambiamenti frequenti.

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

---

## 📦 Repository Individuali

- [Frontend](https://github.com/henry8913/7_RMI-Made-in-Italy_Front-end)
- [Backend](https://github.com/henry8913/7_RMI-Made-in-Italy_Back-end)
- [AI Driving Assistant](https://github.com/henry8913/7_RMI-Made-in-Italy_AI-Driving-Assistant)
- [Extensions](https://github.com/henry8913/7_RMI-Made-in-Italy_Extensions)
- [DevLab](https://github.com/henry8913/7_RMI-Made-in-Italy_DevLab.git)

---

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
