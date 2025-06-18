#!/bin/bash

# === CONFIGURAZIONE ===
FRONTEND_REPO="https://github.com/henry8913/7_RMI-Made-in-Italy_Front-end.git"
BACKEND_REPO="https://github.com/henry8913/7_RMI-Made-in-Italy_Back-end.git"
AI_REPO="https://github.com/henry8913/7_RMI-Made-in-Italy_AI-Driving-Assistant.git"

FRONTEND_BRANCH="main"
BACKEND_BRANCH="main"
AI_BRANCH="main"
# ======================

echo "📂 Siamo già dentro la repo monorepo corrente: $(pwd)"
echo "✅ Inizializzo Git solo se serve..."
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || git init

echo "🔗 Aggiungo le repo remote temporanee: $FRONTEND_REPO, $BACKEND_REPO, $AI_REPO, $EXTENSIONS_REPO, $DEVLAB_REPO"
git remote add frontend "$FRONTEND_REPO"
git remote add backend "$BACKEND_REPO"
git remote add ai "$AI_REPO"

echo "⬇️ Fetch dei contenuti"
git fetch frontend
git fetch backend
git fetch ai

echo "🌲 Aggiunta della subtree: Front-end/"
git subtree add --prefix="Front-end" frontend "$FRONTEND_BRANCH" --squash

echo "🌲 Aggiunta della subtree: Back-end/"
git subtree add --prefix="Back-end" backend "$BACKEND_BRANCH" --squash

echo "🌲 Aggiunta della subtree: AI Driving Assistant/"
git subtree add --prefix="AI Driving Assistant" ai "$AI_BRANCH" --squash

echo "✅ Monorepo pronta! Le cartelle Front-end/, Back-end/ e AI Driving Assistant/ sono state importate."

echo ""
echo "🧠 Ora puoi fare il primo commit se serve:"
echo "   git commit -am 'Import Front-end, Back-end e  AI Driving Assistant con subtree'"