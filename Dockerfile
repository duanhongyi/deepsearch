FROM registry.drycc.cc/drycc/base:bookworm

ADD app /app

WORKDIR /app

RUN install-stack node 22 && . init-stack \
  && npm install -g pnpm \
  && pnpm install \
  && pnpm build

CMD ["bash", "-c", "pnpm start"]

