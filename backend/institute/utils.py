# utils.py

from twilio.rest import Client
from django.conf import settings


def send_sms(to, body):
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    message = client.messages.create(
        messaging_service_sid=settings.TWILIO_MESSAGING_SERVICE_SID, to=to, body=body
    )
    return message.sid
