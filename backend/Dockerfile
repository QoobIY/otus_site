FROM python:3.6-alpine

WORKDIR /app
COPY ./app/req.txt .
RUN pip install -r req.txt
COPY ./app .

RUN python manage.py makemigrations
RUN python manage.py migrate