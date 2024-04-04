from twilio.rest import Client
from django.conf import settings


def send_sms(phone_number, message):
    client = Client(settings.TWILIO_ACCOUNT_SID, settings.TWILIO_AUTH_TOKEN)
    message = client.messages.create(
        messaging_service_sid=settings.TWILIO_MESSAGING_SERVICE_SID,
        to=phone_number,
        body=message,
    )
    return message.sid


send_sms("+917289939775", "Hello")
