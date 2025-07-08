FROM registry.drycc.cc/drycc/base:bookworm

ENV PORT=5000

ADD app /app

WORKDIR /app

RUN install-stack python 3.13 && . init-stack \
  && python3 -m venv /app/.venv \
  && source /app/.venv/bin/activate \
  && pip3 install --disable-pip-version-check --no-cache-dir -r /app/requirements.txt \
  && echo "source /app/.venv/bin/activate" >> /opt/drycc/python/profile.d/python.sh

CMD ["bash", "-c", "python server.py --port $PORT"]

