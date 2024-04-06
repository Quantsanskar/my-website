from twilio.rest import Client
from django.conf import settings
TWILIO_ACCOUNT_SID='AC98836b5ddd3648eec8b6589f8f9ab47d'
TWILIO_AUTH_TOKEN='ac422cc664ed016e695e6048669a30ae'
from_phonenumber=+12564624142

def send_sms(phone_number, message):
    client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
    message = client.messages.create(
        from_=from_phonenumber,
        to=phone_number,
        body=message,
    )
    return message.sid



