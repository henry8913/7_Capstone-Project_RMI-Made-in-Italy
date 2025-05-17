#!/bin/bash

# === CONFIGURAZIONE ===
FRONTEND_REPO="https://github.com/henry8913/7_RMI-Made-in-Italy_Front-end.git"
BACKEND_REPO="https://github.com/henry8913/7_RMI-Made-in-Italy_Back-end.git"
AI_REPO="https://github.com/henry8913/7_RMI-Made-in-Italy_AI-Driving-Assistant.git"
EXTENSIONS_REPO="https://github.com/henry8913/7_RMI-Made-in-Italy_Extensions.git"
DEVLAB_REPO="https://github.com/henry8913/7_RMI-Made-in-Italy_DevLab.git"

FRONTEND_BRANCH="main"
BACKEND_BRANCH="main"
AI_BRANCH="main"
EXTENSIONS_BRANCH="main"
DEVLAB_BRANCH="main"
# ======================

echo "📂 Siamo già dentro la repo monorepo corrente: $(pwd)"
echo "✅ Inizializzo Git solo se serve..."
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || git init

echo "🔗 Aggiungo le repo remote temporanee: $FRONTEND_REPO, $BACKEND_REPO, $AI_REPO, $EXTENSIONS_REPO, $DEVLAB_REPO"
git remote add frontend "$FRONTEND_REPO"
git remote add backend "$BACKEND_REPO"
git remote add ai "$AI_REPO"
git remote add extensions "$EXTENSIONS_REPO"
git remote add devlab "$DEVLAB_REPO"

echo "⬇️ Fetch dei contenuti"
git fetch frontend
git fetch backend
git fetch ai
git fetch extensions
git fetch devlab

echo "🌲 Aggiunta della subtree: Front-end/"
git subtree add --prefix="Front-end" frontend "$FRONTEND_BRANCH" --squash

echo "🌲 Aggiunta della subtree: Back-end/"
git subtree add --prefix="Back-end" backend "$BACKEND_BRANCH" --squash

echo "🌲 Aggiunta della subtree: AI Driving Assistant/"
git subtree add --prefix="AI Driving Assistant" ai "$AI_BRANCH" --squash

echo "🌲 Aggiunta della subtree: Extensions/"
git subtree add --prefix="Extensions" extensions "$EXTENSIONS_BRANCH" --squash

echo "🌲 Aggiunta della subtree: DevLab/"
git subtree add --prefix="DevLab" devlab "$DEVLAB_BRANCH" --squash

echo "✅ Monorepo pronta! Le cartelle Front-end/, Back-end/, AI Driving Assistant/, Extensions/ e DevLab/ sono state importate."

echo ""
echo "🧠 Ora puoi fare il primo commit se serve:"
echo "   git commit -am 'Import Front-end, Back-end, AI Driving Assistant, Extensions e DevLab con subtree'"