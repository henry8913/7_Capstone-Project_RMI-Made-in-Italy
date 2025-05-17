
# 🚗 Capstone Project: RMI Made in Italy

> 🚧 **Attenzione:** Questo progetto è attualmente in fase di sviluppo attivo. Funzionalità e documentazione sono soggette a cambiamenti frequenti.

<img src="./img/cover.jpg" alt="Cover" width="100%" />

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

---

## 👤 Autore

Progetto creato da [Henry](https://github.com/henry8913).

---

## 📄 Licenza

Questo progetto è rilasciato sotto licenza [GNU GPLv3](LICENSE.txt).
