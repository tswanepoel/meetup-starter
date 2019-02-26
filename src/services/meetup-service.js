const MeetupApiBaseUrl = 'https://cors-anywhere.herokuapp.com/https://api.meetup.com';
const MeetupApiKey = '1f3f6c70153a47d46196de194e465d';

export default class MeetupService {

    static getGroups(country) {
        return this.ajax('GET', `${MeetupApiBaseUrl}/find/groups?country=${country}&key=${MeetupApiKey}`);
    }

    static ajax(method, url) {

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const json = JSON.parse(xhr.response);
                    resolve(json);
                } else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    });
                }
            };

            xhr.onerror = () => {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                });
            };
            
            xhr.send();
        });

    }
};