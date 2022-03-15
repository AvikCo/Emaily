const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const key = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({subject, recipients}, content){
        super();

        this.sgApi = sendgrid(key.sendGridKey);
        this.from_email = new helper.Email('avikkarmakar14@gmail.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recepients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecepients();
    }

    formatAddresses(recipients){
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        });
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);
        
        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings)
    }

    addRecepients(){
        const personalize = new helper.Personalization();

        this.recepients.forEach(recepient => {
            personalize.addTo(recepient);
        });

        this.addPersonalization(personalize);

    }

    async send(){
      const request = this.sgApi.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: this.toJSON()
      });
      try{
      const response = await this.sgApi.API(request);
      return response;
      }
      catch (ex){
            console.log('its failed', ex.response.body.errors);
      }
      

    }
}

module.exports = Mailer;