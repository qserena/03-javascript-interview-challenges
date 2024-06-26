import podcasts from './data.js'

/*

54 - Save the Weekend

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast.

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description.

Each description should look like this:
[{
    id: 1,
    title: "Scrimba Podcast",
    ...
    description: "Scrimba Podcast is a 50 minute education podcast hosted
    by Alex Booker."
}
...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, separated with commas:

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."

*/

function createDescriptionsFor(data) {
    return data.map((podcast) => {
        let hostsText = ''
        const noOfHosts = podcast.hosts.length
        if (noOfHosts === 1) {
            hostsText = podcast.hosts[0]
        } else if (noOfHosts > 1) {
            const hostsText1 = podcast.hosts.slice(0, noOfHosts - 1).join(', ')
            const hostsText2 = podcast.hosts[noOfHosts - 1]
            hostsText = hostsText1 + ', and ' + hostsText2
        }

        const des = `${podcast.title} is a ${podcast.duration} minute ${podcast.genre} podcast hosted by ${hostsText}.`
        const newPod = {
            ...podcast,
            description: des,
        }
        return newPod
    })
}

console.log(createDescriptionsFor(podcasts))
