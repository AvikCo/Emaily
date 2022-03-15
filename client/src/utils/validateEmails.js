const rgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export default (emails) => {
    if(emails.slice(-1) === ',')
        emails = emails.substring(0, emails.length - 1);
const invalidEmails = emails.split(',')
                   .map(email=> email.trim())
                   .filter(email => rgx.test(email) === false);
//invalidEmails
if((invalidEmails.length)){
    return `These emails are invalid: ${invalidEmails}`;
}
return;
}