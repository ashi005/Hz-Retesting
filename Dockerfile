FROM node:latest
##RUN git clone https://github.com/vbxngvklfhgikklvfsvrfundfnosdif/bibidfgjfdxj9e5eng45tger /root/queendianamd
RUN git clone https://github.com/vbxngvklfhgikklvfsvrfundfnosdif/bgdxvcdfngb /root/queendianamd
WORKDIR /root/queendianamd
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "main.js"]
