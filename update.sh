#!/bin/bash
npm run build
firebase deploy
rm -rf build
