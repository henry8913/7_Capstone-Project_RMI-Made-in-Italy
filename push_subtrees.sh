#!/bin/bash

# === CONFIGURAZIONE ===
FRONTEND_PREFIX="Front-end"
BACKEND_PREFIX="Back-end"
AI_PREFIX="AI Driving Assistant"
EXTENTIONS_PREFIX="Extentions"
DEVLAB_PREFIX="Devlab"

FRONTEND_REMOTE="frontend"
BACKEND_REMOTE="backend"
AI_REMOTE="ai"
EXTENTIONS_REMOTE="extentions"

FRONTEND_BRANCH="main"
BACKEND_BRANCH="main"
AI_BRANCH="main"
EXTENTIONS_BRANCH="main"
DEVLAB_BRANCH="main"
# ======================

echo "🚀 Spingo le modifiche di Front-end alla sua repo..."
git subtree push --prefix="$FRONTEND_PREFIX" "$FRONTEND_REMOTE" "$FRONTEND_BRANCH"

echo "🚀 Spingo le modifiche di Back-end alla sua repo..."
git subtree push --prefix="$BACKEND_PREFIX" "$BACKEND_REMOTE" "$BACKEND_BRANCH"

echo "🚀 Spingo le modifiche di AI alla sua repo..."
git subtree push --prefix="$AI_PREFIX" "$AI_REMOTE" "$AI_BRANCH"

echo "🚀 Spingo le modifiche di Extentions alla sua repo..."
git subtree push --prefix="$EXTENTIONS_PREFIX" "$EXTENTIONS_REMOTE" "$EXTENTIONS_BRANCH"

echo "🚀 Spingo le modifiche di DevLab alla sua repo..."
git subtree push --prefix="$DEVLAB_PREFIX" "$DEVLAB_REMOTE" "$DEVLAB_BRANCH"

echo "✅ Push completato! Le repo originali sono aggiornate."