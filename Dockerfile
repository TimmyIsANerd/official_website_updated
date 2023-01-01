FROM node:16-alpine
COPY backend /backend/
COPY frontend /frontend/
COPY *.json /
RUN npm install --prefix frontend && npm install
RUN npm run build:server && npm run build:frontend
EXPOSE 9977
ENTRYPOINT npm start