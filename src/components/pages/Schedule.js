import React from "react";
import { GoogleApis,google } from "googleapis";

const OAuth2 = google.auth;
const oAuth2Client = new OAuth2(
    //client id, client secret
    '590333059770-e2o624sftl3r0m3keomafn4vqcjaejej.apps.googleusercontent.com','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'
)
// call setCredentials method on oAuth2client
oAuth2Client.setCredentials({
    refresh_token: '1//04_HSDK3vgTj8CgYIARAAGAQSNwF-L9Irl7vLrwLQbqLJX-5Hi-AXOeWxBPQkpze5ab1aZug81C1BJ6RLCPAhQhIjZBOiDYSSQq0'
})
// create a new calendar instance.
const calendar = google.calendar({version:'v3', auth: oAuth2Client});
// create a new event start date instance.
const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay() + 2);

// create new event end date instance
const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 1);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);
const event = {
    summary: 'Meeting with Google Calendar API',
    description: 'Finish the project using the api',
    colorId: 1,
    start: {
        dateTime: eventStartTime,
        timeZone: 'America/Denver'
    },
    end: {
        dateTime: eventEndTime,
        timeZone: 'America/Denver'
    }
}
// check if busy at event
const AddEvent = () =>{
    calendar.freebusy.query({
        resource: {
            timeMin: eventStartTime,
            timeMax: eventEndTime,
            timeZone: 'America/Denver',
            items: [{id: 'primary'}],
        },
    }, 
    (queryError, queryResponse)=>{
            if(queryError) return console.error('Free Busy Query Error: ',queryError)
    
            const eventArr = queryResponse.data.calendars.primary.busy
    
            if(eventArr.length === 0)
                return calendar.events.insert(
                    {calendarId: 'primary',resource:event}, 
                err =>{
                    if(err) return console.error('Error Creating calendar event', err)
    
                    return  console.log('Calendar event successfully created.')
                })
            return console.log('sorry but currently busy');
    })
}

const Schedule = () =>{
    return (
        <div>
            <button onClick={AddEvent}>AddEventToCalendar</button>
        </div>
        
    );
}

export default Schedule;