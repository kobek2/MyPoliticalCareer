const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
    state = {}
    showTextNode (1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id ===
    textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener ('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}


function selectOption(option){
    const nextTextNodeId = option.nextText
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}

const textNodes = [
    {
        id: 1, 
        text: 'You have just graduated High School at 18 years old. You are eager to begin your political career as you embark on your next journey in life. You\'ve received decent grades, enough to get you admitted into a state University. You decide to...',
        options: [
            {
                text: 'Seek a higher education and go to college.',
                setState: { diploma: true },
                nextText: 2
            },
        ]
    },
    {
            id: 2,
            text: 'You decide to seek a higher education. You applied to multiple schools, but ulitimately chose the University of Minnesota. You decide to major in...',
            options: [
                {
                    text: 'Political Science',
                    requiredState: (currentState) => currentState.diploma,
                    setState: {diploma: false, polsci: true},
                    nextText: 3
                }, 
                //{
                   // text: 'Economics',
                   // requiredState: (currentState) => currentState.diploma,
                   // setState: {diploma: false, econ: true},
                   // nextText: 5
                //},
            ]
    }, 
    {
                    id: 3,
                    text: 'After four years of undergrad, you have finally graduated with a Bachelor\'s Degree in political science. You are now 22 years old, ready to get into the work-force. But, you\'ve considered the option of going into law school. You decide to take the LSAT to obtain a lawyer license ',
                    options: [
                    {
                        text: 'Enter the Testing Room',
                        nextText: 4
                    },
                ]
    },
    {
                    id: 4,
                    text: 'You get into the testing room for the LSAT. You\'ve completed almost the whole test, but there\'s one question that you really struggle with. You realize that, if you aren\'t able to answer this question correctly, then you will fail the exam. The final question asks what the definition of implicit means. You answer...',
                    options: [
                        {
                            text: '(a) implied, tacitly understood',
                            nextText: 5
                        },
                        {
                            text: '(b) to confirm or make certain',
                            nextText: 10000
                        },
                        {
                            text: '(c) clear, understandable',
                            nextText: 10000
                        }
                    ]
    },
    {
                        id: 5 ,
                        text: 'Congrats! You got it right. You were admitted into the Unviersity of Minnesota\'s Law School and spent the next four years there. You obtained your Law Degree, and you are now 26 years old. But, you\'re thousands of dollars in debt! You decide to put your law degree to work and receive an interview from the local law firm. You accept the invitation, and they ask you why you\'re interested in the job.',
                        options: [
                            {
                                text: 'You keep it real, telling them that you\'re thousands of dollars in debt and in need of a job.',
                                nextText: 6,
                            },
                            {
                                text: 'You express that you want to change the world through meaningful work within your community, defending innocent lives.',
                                nextText: 6,
                            }
                        ]

    },
    {
                            id: 6,
                            text: 'You got the job! You work as a Junior Defense Attorney and earn a starting base salary of $80,000. You work there for a few years, surmounting a $200,000 salary, and pay off your student debts. You are now 31 years old, but everyday, for the past 4 years, you have only thought about public service and are constantly reminded of your long desidre to run for office. You read the local newspaper to see what positions are opened, and you noticed the three: an open School Board Seat in Minneapolis, a battle-ground State House of Representatives seat against no incumbent, and a competitive Congressional Seat against an incumbent. You decide...',
                            options: [
                                {
                                    text: 'to play it safe and run for the Minneapolis\' open School Board seat',
                                    nextText: 7
                                },
                                {
                                    text: 'test your luck in the hopes of advancing your career and run for the battle-ground 34B State House seat',
                                    nextText: 8
                                },
                                {
                                    text: 'attempt to defy all odds in running for the competitive Minnesota\'s 5th Congressional Seat against an Ilhan Omar',
                                    nextText: 9
                                }
                            ]
    }, 
    {
                            id: 7,
                            text: 'You quit your job at the local law firm, and begin the political trail. You file for your candidacy for the open School Board seat. Although it\'s and opened seat, you still need to gather a campaign team. Understanding the demographics of your region is pivotal in winning a race. You decide to open applications for the campaign manager position. 3 applicants apply for the position: ', 
                            options: [
                                {
                                    text: 'Zach, a 25 year old, fresh out of college, with no experience, but able to meet the needs of the younger population',
                                    nextText: 10
                                },
                                {
                                    text: 'Leslie, a 35 year old middle-aged woman, able to meet the demands of the millennials within your area',
                                    nextText: 11
                                },
                                {
                                    text: 'John, a 65 year old with over 30 years of experience in politics',
                                    nextText: 12
                                }
                            ]
    },
    {
                            id: 10,
                            text: 'You have successfully hired Zach as a member of your campaign team. He is now your campaign manager. Along the campaign trail, he asks what you will focus on in representing and serving the people of your community in the School Board. You answer that you will...',
                            options: [
                                {
                                    text: 'Focus on improving teacher wages and class necessities, further releasing the burden on teachers.',
                                    nextText: 13
                                },
                                {
                                    text: 'Focus on improving the school curriculum, hoping to improve the graduation rate and literacy rates of your community.',
                                    nextText: 13
                                },
                                {
                                    text: 'Work to increase fundings for technology to help students adapt to the modernizing world.',
                                    nextText: 13
                                },
                                {
                                    text: 'Address parent frustrations and focus on advocating for parent unions to help guide school decisions.',
                                    nextText: 13
                                }
                            ]
                        },
                        {
                            id: 11,
                            text: 'You have successfully hired Leslie as a member of your campaign team. She is now your campaign manager. Along the campaign trail, she asks what you will focus on in representing and serving the people of your community in the School Board. You answer that you will...',
                            options: [
                                {
                                    text: 'Focus on improving teacher wages and class necessities, further releasing the burden on teachers.',
                                    nextText: 14
                                },
                                {
                                    text: 'Focus on improving the school curriculum, hoping to improve the graduation rate and literacy rates of your community.',
                                    nextText: 14
                                },
                                {
                                    text: 'Work to increase fundings for technology to help students adapt to the modernizing world.',
                                    nextText: 14
                                },
                                {
                                    text: 'Address parent frustrations and focus on advocating for parent unions to help guide school decisions.',
                                    nextText: 15
                                }
                            ]
                        },
                        {
                            id: 12,
                            text: 'You have successfully hired John as a member of your campaign team. He is now your campaign manager. Along the campaign trail, he asks what you will focus on in representing and serving the people of your community in the School Board. You answer that you will...',
                            options: [
                                {
                                    text: 'Focus on improving teacher wages and class necessities, further releasing the burden on teachers.',
                                    nextText: 15
                                },
                                {
                                    text: 'Focus on improving the school curriculum, hoping to improve the graduation rate and literacy rates of your community.',
                                    nextText: 15
                                },
                                {
                                    text: 'Work to increase fundings for technology to help students adapt to the modernizing world.',
                                    nextText: 15
                                },
                                {
                                    text: 'Address parent frustrations and focus on advocating for parent unions to help guide school decisions.',
                                    nextText: 15
                                }
                            ]
                        },
                        {
                            id: 13,
                            text: 'Zach advizes you to advertise through means of television and social media, further getting your name and platform out there. He also advizes you to go door-to-door to spread your name within the community. You decide to...',
                            options: [
                                {
                                    text: 'Follow Zach\'s advice and create television and YouTube ads',
                                    nextText: 16
                                },
                                {
                                    text: 'Fire Zach and hire Leslie',
                                    nextText: 14
                                },
                                {
                                    text: 'Fire Zach and hire John',
                                    nextText: 15
                                }
                            ]
                        },
                        {
                            id: 14,
                            text: 'Leslie advizes you to advertise through means of television, yard-signs, and yard-signs, further expanding your efforts to get elected. She also advizes you to go door-to-door to spread your name within the community. You decide to...',
                            options: [
                                {
                                    text: 'Follow Leslie\'s advice and create ',
                                    nextText: 17
                                },
                                {
                                    text: 'Fire Leslie and hire Zach',
                                    nextText: 13
                                },
                                {
                                    text: 'Fire Leslie and hire John',
                                    nextText: 15
                                }
                            ]
                        },
                        {
                            id: 15,
                            text: 'John advizes you to advertise through means of good ol\' door knocking, radio ads, and mailing, further expanding your efforts to get elected. You decide to...',
                            options: [
                                {
                                    text: 'Follow John\'s advice and create ',
                                    nextText: 18
                                },
                                {
                                    text: 'Fire John and hire Zach',
                                    nextText: 13
                                },
                                {
                                    text: 'Fire John and hire Leslie',
                                    nextText: 14
                                }
                            ]
                        },
                        {
                            id: 16,
                            text: 'You follow Zach\'s advice, and the polls are starting to come in your favor! Day by day, week by week, and door by door, you spread your message as you run for Minnesota\'s 5th Congressional District. On the last day of campaigning, you decide to...',
                            options: [
                                {
                                    text: 'Hold a rally to pump of voters!',
                                    nextText: 19
                                },
                                {
                                    text: 'Make TikToks to continue to spread the word',
                                    nextText: 19
                                },
                                {
                                    text: 'Go on Instagram Live to talk about key issues Americans face',
                                    nextText: 19
                                },
                                {
                                    text: 'Take a resting day to focus on mental health',
                                    nextText: 19
                                }
                            ]
                        },
                        {
                            id: 17,
                            text: 'You follow Leslie\'s advice, and the polls are starting to come in your favor! Day by day, week by week, and door by door, you spread your message as you run for the Minneapolis\'s School Board Seat. On the last day of campaigning, you decide to...',
                            options: [
                                {
                                    text: 'Hold a rally to pump of voters!',
                                    nextText: 19
                                },
                                {
                                    text: 'Film an advertisement and send it in on the last of the campaign days',
                                    nextText: 19
                                },
                                {
                                    text: 'Make a last round push to sell all leftover yard-signs',
                                    nextText: 19
                                },
                                {
                                    text: 'Take a resting day to focus on mental health',
                                    nextText: 19
                                }
                            ]
                        },
                        {
                            id: 18 ,
                            text: 'You follow John\'s advice, and the polls are starting to come in your favor! Day by day, week by week, and door by door, you spread your message as you run for Minneapolis\' Open School Board Seat. On the last day of campaigning, you decide to...',
                            options: [
                                {
                                    text: 'Hold a rally to pump of voters',
                                    nextText: 19
                                },
                                {
                                    text: 'Mail some thank you letters to volunteers',
                                    nextText: 19
                                },
                                {
                                    text: 'Get on a radio station to tell the people of Minneapolis to get out and vote',
                                    nextText: 19
                                },
                                {
                                    text: 'Take a resting day to focus on mental health',
                                    nextText: 19
                                }
                            ]
                        },
                        {
                            id: 19,
                            text: 'You decide to focus on a key issue facing residents within your area. In doing so, many parents, along with teachers, resonated with your message. You were effectively elected as a member of the School Board, and swore in as you said your Oath of Office. Congratulations, you have won the game!'
                        },





















                        {
                            id: 8,
                            text: 'You turn the news on and find out that a crowded field of candidates have filed to run in the same State House seat as you did. Early polls signify that both parties have front runners polling in at almost 50% of the vote, but your education and experience as a lawyer may put you in a position to compete with the polls. How will you begin your campaign? ',
                            options: [
                                {
                                text: 'Begin by filing your candidacy with the Democratic Party',
                                nextText: 20,
                                },
                                {
                                text: 'Begin by filing your candidacy with the Republican Party',
                                nextText: 21,
                                },
                            ]
                        },
                        {
                            id: 20,
                            text: 'You decide to file for State House District 34B as a Democrat. The Democratic Party provides you with $1000 in funds to begin your campaign, and there are 4 weeks to campaign. Before you even begin to think about reaching the generals with a divided district, you must clear the path of the primaries. Your education and experience eats into leading Democratic candidate Edward Smith\'s lead by 10%, as well taking voters from other candidates. Current polling suggets that Edward Smith holds a 47% polling lead, while you take 2nd place with 30% of the vote. An early opportunity to debate as been put on the table. Will you take a week to participate and accept?',
                            options: [
                                {
                                    text: 'You respectfully decline to focus on campaigning to get your name out there',
                                    nextText: 23
                                } ,
                                {
                                    text: 'You opt into the debate to hopefully spread your name throughout your district.',
                                    nextText: 100
                                }
                            ]
                        },
                        {
                            id: 21,
                            text: 'You decide to file for State House District 34B as a Republican. The Republican Party provides you with $1000 in funds to begin your campaign, and there are 4 weeks to campaign. Before you even begin to think about reaching the generals with a divided district, you must clear the path of the primaries. Your education and experience eats into leading Republican candidate John Tray\'s lead by 10%, as well taking voters from other candidates. Current polling suggets that John Tray holds a 47% polling lead, while you take 2nd place with 30% of the vote. An early opportunity to debate as been put on the table. Will you take a week to participate and accept?',
                            options: [
                                {
                                    text: 'You respectfully decline to focus on campaigning to get your name out there',
                                    nextText: 23
                                } ,
                                {
                                    text: 'You opt into the debate to hopefully spread your name throughout your district.',
                                    nextText: 100
                                }
                            ]
                        },
                        {
                            id: 23,
                            text: 'You decline the opportunity to participate in debate, and it sends a mixed message to the primary voters. You end up hurting your polling numbers as a result. To begin week 1, you... ',
                            options: [
                                {
                                    text: 'Go door-to-door, slowly but surely.',
                                    nextText: 25
                                }
                            ]
                        },
                        {
                            id: 25,
                            text: 'You go door-to-door, but this tactic ultimately fails. Your polls have most definitely taken a huge hit for missing the debate, but it\'s still too early to tell how much it really hurt you.  But, volunteers have begun to come around to support your campaign. Additionally, prices have inflated due to high demand as the campaigning season continues. You lose the ability to send tv ads, but you have to hit back hard in week 2.',
                            options: [
                                {
                                    text: 'Continue to go door-to-door, utilizing the volunteers that have decided to support your campaign.',
                                    nextText: 26
                                },
                                {
                                    text: 'Spend $500 on yard signs and merchandise, hoping to catch a few eyes.',
                                    nextText: 27
                                },
                                {
                                    text: 'Spend $750 on radio ads across your district, hoping to spread your message.',
                                    nextText: 28
                                },
                                {
                                    text: 'Spend $1500 on tv ads across your district, gaining mass attention from all demographics.', 
                                    nextText: 29
                                }
                            ]
                        },
                        {
                            id: 26,
                            text: 'You decide to spend week two with volunteers to go door-to-door. After week two, you realize that volunteers greatly helped with your campaign! Polling suggests that you have jumped up to 35% of the vote, while your main primary opponenet still holds 42% of the vote. Additionally, volunteers helped raise an additional $500 towards your campaign. You\'re burnt out from going door-to-door, so you have to spend your time another way. How will you spend week 3?',
                            options: [
                                {
                                    text: 'Spend $500 on yard signs and merchandise, hoping to catch a few eyes.',
                                    nextText: 30
                                },
                                {
                                    text: 'Spend $750 on radio ads across your district, hoping to spread your message.',
                                    nextText: 31
                                },
                                {
                                    text: 'Spend $1500 on tv ads across your district, gaining widespread support and notoriety. ',
                                    nextText: 32
                                },
                                {
                                    text: 'Take a rest week and go full force on the final week going door-to-door with all of your volunteers.',
                                    nextText: 33
                                }
                            ]
                        },
                        {
                            id: 27,
                            text: 'For week 2, you '

                        },
                      
                      
                
                            

                                // Everything good up until point where character can choose which race to run in. School Board finished to win game, need to finish battleground and incumbent
                                // Player can choose no to take LSAT path not finished




            {
                id: 10,
                text: 'You chose to major in Economics. You go on to the University of Minnesota, and year-by-year, you get by. After four long years, you finally graduate with an economics degree! You find no purpose in trying to achieve a higher education, and as an economics major, you see it fit that you pay off your debt as soon as possible. You apply to...',
                options: [
                    {
                        text: 'Work for a local non-profit in managing funds for finding homeless dogs a home',
                        nextText: 11
                    }
                ]
            }, 
                {
                    id: 11,
                    text: 'You work for a local non-profit in manaing funds for a homeless dog shelter. You decide to work there for the next five years, amounting a salary of $90,000. You\'re able to pay off your student debt, and you are now 26. You see this as a perfect time to pursue your political career. To begin your journey, you decide to apply to...',
                    options: [
                        {
                            text: 'Intern for Democratic Representative Ilhan Omar, a controversial member of Congress',
                            nextText: 12
                        },
                        {
                            text: 'Apply to be the economic overseeer of the Democratic Congressional Campaign Committee',
                            nextText: 26
                        },
                        {
                            text: 'Apply to be the economic overseeer of the Republiacn Congressional Campaign Committee',
                            nextText: 26
                        }
                    ]
                },
                    {
                        id: 12,
                        text: 'You decide to intern for Democratic Representative Ilhan Omar. During your time, you answer phone calls, manage her schedule, and help her on the campaign trail. But, you decide that, after 1 year, you no longer want to intern for Ilhan Omar. The two of you become extremely good friends, and she recommends you run for an open State House of Representative Seat. You see one problem though: Ilhan Omar has been called upon by her constituents to step down, and it\'s an election year. Knowing this, you decide to...',
                        options: [
                            {
                                text: 'Run against Ilhan Omar in the Democratic Party primary, with a win on the cusp of your hand',
                                nextText: 13
                            },
                            {
                                text: 'Take Ilhan\'s advice, kick-start your political career, and run for the uncompetitive State House Seat.',
                                nextText: 23
                            }
                        ]

                    },
                        {
                            id: 13,
                            text: 'You\'ve chosen an extremely difficult path. You decide to file for candidacy and send your application to the Secretary of State to run for Minnesota\'s 5th Congressional District. Ilhan Omar, though, finds out about your intent to run. She vows that she will do everything in her power to ruin your career and to stop your dreams. You know that a wrong move could destroy your political career, so you decide to...',
                            options: [
                                {
                                    text: 'Gather a campaign team and advisors as fast as possible, in the hopes of winning the Democratic Primary.',
                                    nextText: 14
                                },
                                {
                                    text: 'End your campaign, knowing that you\'re no match for a well-seasoned politician like Ilhan Omar.',
                                    nextText: 22
                                }
                            ]
                        },
                            {
                                id: 14,
                                text: 'You decide to open applications for the campaign manager position. 3 applicants apply for the position: (a) Zach, a 25 year old, fresh out of college, with no experience, but able to meet the needs of the younger population, (b) Leslie, a 35 year old  middle-aged woman, able to meet the demands of the milenials within your area, or John, a 65 year old with over 30 years of experience in politics. Understanding your Congressional district and their needs is crucial in gaining the support of your party. You decide to hire...',
                                options: [
                                    {
                                        text: 'Zach',
                                        nextText: 15
                                    }, 
                                    {
                                        text: 'Leslie',
                                        nextText: 18
                                    },
                                    {
                                        text: 'John',
                                        nextText: 20
                                    }
                                ]
                            },
                                {
                                    id: 15,
                                    text: 'Zach gladly joins your team, determined to defeat Ilhan Omar. He provides you with critical information that your Congressional District indeed consists of a majority of young Democratic voters, and that the generals will be piece of cake. He advizes you to go on social media to connect to young voters and go door-to-door on the University of Minnesota Campus, where you went to college, to campaign. You decide to... ',
                                    options: [
                                        {
                                            text: 'follow Zach\'s advice and campaign on the University of Minnesota Campus and through social media',
                                            nextText: 16
                                        },
                                        {
                                            text: 'Fire Zach and hire Leslie',
                                            nextText: 18
                                        },
                                        {
                                            text: 'Fire Zach and hire John',
                                            nextText: 19
                                        }

                                    ]
                                },
                                {
                                    id: 24,
                                    text: 'You have successfully hired Leslie as a member of your campaign team. She is now your campaign manager. Along the campaign trail, she asks what you will focus on in representing and serving the people of your community in the School Board. You answer that you will...',
                                    options: [
                                        {
                                            text: 'Focus on improving teacher wages and class necessities, further releasing the burden on teachers.',
                                            nextText: 9
                                        },
                                        {
                                            text: 'Focus on improving the school curriculum, hoping to improve the graduation rate and literacy rates of your community.',
                                            nextText: 9
                                        },
                                        {
                                            text: 'Work to increase fundings for technology to help students adapt to the modernizing world.',
                                            nextText: 9
                                        },
                                        {
                                            text: 'Address parent frustrations and focus on advocating for parent unions to help guide school decisions.',
                                            nextText: 9
                                        }
                                    ]
                                },
                                    {
                                        id: 16,
                                        text: 'You follow Zach\'s advice and gather a huge following! As the campaign trail goes on, you continue to gather support, and the polls look good towards your direction. On the last day of the campaign trail, you decide to end it with a bang!',
                                        options: [
                                            {
                                                text: 'Hold a rally to pump of voters!',
                                                nextText: 17
                                            },
                                            {
                                                text: 'Make TikToks to continue to spread the word!',
                                                nextText: 17
                                            },
                                            {
                                                text: 'Go on Instagram Live to talk about key issues Americans face',
                                                nextText: 17
                                            },
                                            {
                                                text: 'Take a resting day to focus on mental health',
                                                nextText: 17
                                            }
                                        ]
                                        
                                    },
                                        {
                                            id: 17,
                                            text: 'Congratulations! You have won the Democratic Primary for Minnesota\'s 5th Congressional Seat! You cruise through the generals, defeating a Republican Challenger and begin your term as a newly elected member of Congress. You\'ve won the game!'
                                        },
                            
                            
                                            {
                                                id: 20,
                                                text: 'You hire John to be apart of your team. Also he\'s late to every meeting due to his old age, he provides valuable advice from his prior years of experience. John advises you to have a sit-down interview with local news reporters, get your name in the newspaper, and go door to door to spread your name. You decide to...',
                                                options: [
                                                    {
                                                        text: 'Follow John\'s advice and do what your advized',
                                                        nextText: 21
                                                    },
                                                    {
                                                        text: 'Fire John and hire Zach',
                                                        nextText: 15
                                                    },
                                                    {
                                                        text: 'Fire John and hire Leslie',
                                                        nextText: 18
                                                    }
                                                ]
                                            },
                                            {
                                                id: 21,
                                                text: 'You follow the advice of John, but you aren\'t able to attract the younger voters within your district. The race comes to a tight ending, so on the last day you decide too...',
                                                options: [
                                                    {
                                                        text: 'Hold a rally to pump of voters!',
                                                        nextText: 17
                                                    },
                                                    {
                                                        text: 'Make TikToks to continue to spread the word!',
                                                        nextText: 17
                                                    },
                                                    {
                                                        text: 'Go on Instagram Live to talk about key issues Americans face',
                                                        nextText: 17
                                                    },
                                                    {
                                                        text: 'Take a resting day to focus on mental health',
                                                        nextText: 17
                                                    }
                                                ]
                                            },
                                            {
                                                id: 22,
                                                text: 'You decide to wimp and drop out of the race! Ilhan Omar, feeling betrayed, proceeds to ruin your political career, barring you from ever being able to run a successful campaign to run for public office. You decide to go back to overseeing economic efforts for a homeless dog shelter for the next 20 years and call it quits on your political ambitions. You lost! '
                                            },
                                            {
                                                id: 23,
                                                text: 'You decide to follow the adivce of Ilhan Omar and file for candidacy for the open School Board seat. Although it\'s and opened seat, you still need to gather a campaign team. You decide to open applications for the campaign manager position. 3 applicants apply for the position: (a) Zach, a 25 year old, fresh out of college, with no experience, but able to meet the needs of the younger population, (b) Leslie, a 35 year old  middle-aged woman, able to meet the demands of the milenials within your area, or John, a 65 year old with over 30 years of experience in politics.', 
                                                options: [
                                                    { 
                                                        text: 'Zach',
                                                        nextText: 8
                                                    },
                                                    {
                                                        text: 'Leslie',
                                                        nextText: 24
                                                    },
                                                    {
                                                        text: 'John',
                                                        nextText: 25
                                                    }
                                                    
                                                ]
                                            },
                                            {
                                                id: 24,
                                                text: 'You have successfully hired Leslie as a member of your campaign team. She is now your campaign manager. Along the campaign trail, she asks what you will focus on in representing and serving the people of your community in the School Board. You answer that you will...',
                                                options: [
                                                    {
                                                        text: 'Focus on improving teacher wages and class necessities, further releasing the burden on teachers.',
                                                        nextText: 9
                                                    },
                                                    {
                                                        text: 'Focus on improving the school curriculum, hoping to improve the graduation rate and literacy rates of your community.',
                                                        nextText: 9
                                                    },
                                                    {
                                                        text: 'Work to increase fundings for technology to help students adapt to the modernizing world.',
                                                        nextText: 9
                                                    },
                                                    {
                                                        text: 'Address parent frustrations and focus on advocating for parent unions to help guide school decisions.',
                                                        nextText: 9
                                                    }
                                                ]
                                            },
                                            {
                                                id: 25,
                                                text: 'You have successfully hired John as a member of your campaign team. He is now your campaign manager. Along the campaign trail, he asks what you will focus on in representing and serving the people of your community in the School Board. You answer that you will...',
                                                options: [
                                                    {
                                                        text: 'Focus on improving teacher wages and class necessities, further releasing the burden on teachers.',
                                                        nextText: 9
                                                    },
                                                    {
                                                        text: 'Focus on improving the school curriculum, hoping to improve the graduation rate and literacy rates of your community.',
                                                        nextText: 9
                                                    },
                                                    {
                                                        text: 'Work to increase fundings for technology to help students adapt to the modernizing world.',
                                                        nextText: 9
                                                    },
                                                    {
                                                        text: 'Address parent frustrations and focus on advocating for parent unions to help guide school decisions.',
                                                        nextText: 9
                                                    }
                                                ]
                                            },
                                            {
                                                id: 26,
                                                text: 'You decide to be the economic overseeer of a major political party. During the whole primary period, you and your party focus on raising funds in order to improve your party\'s chances in the generals. You propose that the Party focus on...',
                                                options: [
                                                    {
                                                        text: 'Attracting to PACs and lobbyists in order to maximize funding heading into the election',
                                                        nextText: 27
                                                    },
                                                    {
                                                        text: 'Attracting to grass-roots organizations and asking for donations from the everyday American',
                                                        nextText: 31
                                                    }, 
                                                ]
                                            }, 
                                            {
                                                id: 27,
                                                text: 'You maximize funding through meeting the demands of PACs and lobbyists. Although you make record numers in donations, each and every political candidate within your party has received backlash for their involvement in dirty money. You ultimately decide to put the money to use, and...',
                                                options: [
                                                    {
                                                        text: 'Release TV ads in every single home',
                                                        nextText: 29
                                                    }, 
                                                    {
                                                        text: 'Put out 30 second YouTube ad that is unskippable',
                                                        nextText: 29
                                                    }, 
                                                    { 
                                                        text: 'Spend money on volunteer efforts and centers in order to send a message directly to Americans',
                                                        nextText: 28
                                                    },
                                                    {
                                                        text: 'Get every candidate within your party lavish vehicles to help them get door-to-door quickly and easily',
                                                        nextText: 29
                                                    }
                                                ]
                                            },
                                            {
                                                id: 28, 
                                                text: 'You successfully garner the necessary attention and votes as the general election comes to an end. In the end, 90% of the candidates in which you helped fund were able to successfully get elected and/or re-elected. You were given a pay bonus for your contribution at a significant political party, and earned a whopping $200,000 for contributing. After a succesfful campaigning season, you decide to leave the political party and look towards your own political ambitions. You decide to to...',
                                                options: [
                                                    {
                                                        text: 'Run for the open School Board seat',
                                                        nextText: 30
                                                    },
                                                    {
                                                        text: 'Run for the purple State House seat',
                                                        nextText: 30
                                                    },
                                                    {
                                                        text: 'Run for the competitive Congressional Seat against an incumbent',
                                                        nextText: 30
                                                    }
                                                ]
                                                
                                            },
                                            {
                                                id: 30,
                                                text: 'You file for candidacy and decide to open applications for the campaign manager position. 3 applicants apply for the position: (a) Zach, a 25 year old, fresh out of college, with no experience, but able to meet the needs of the younger population, (b) Leslie, a 35 year old  middle-aged woman, able to meet the demands of the milenials within your area, or John, a 65 year old with over 30 years of experience in politics. Understanding your Congressional district and their needs is crucial in gaining the support of your party. You decide to hire...',
                                                options: [
                                                    {
                                                        text: 'Zach',
                                                        nextText: 15
                                                    }, 
                                                    {
                                                        text: 'Leslie',
                                                        nextText: 18
                                                    },
                                                    {
                                                        text: 'John',
                                                        nextText: 20
                                                    }
                                                ]
                                            },
                                            {
                                                id: 29,
                                                text: 'Your campaign strategy ultimatley failed, and only 10% of competitive elections were you able to successfully win as the campaign economic advisor. You were laid off from your job, and your political ambitions never surfaced as you experieneced difficulties coping with your failures. You lost!'
                                            },
                                            {
                                                id: 31, 
                                                text: 'You decide to run a clean campaign and ask everyday Americans for donations, from every street and every corner. But, donations come in slow, and insufficient campaign funds were brought in. You\'re career is in jeopardy if you don\'t raise sufficient funds. So, you ultimately decide...',
                                                options: [
                                                    {
                                                        text: 'Sucumb to the pressures of PACs and ask for donations from non-grassroots organizations',
                                                        nextText: 27
                                                    },
                                                    {
                                                        text: 'Get candidates on the ground, and force them to ask for donations and votes at homes',
                                                        nextText: 32
                                                    },
                                                    {
                                                        text: 'Resign from the position to save your career before it\'s too late.',
                                                        nextText: 33
                                                    }, 
                                                    {
                                                        text: 'Call up some of your rich friends to donate money for your political party, potentially saving your career.',
                                                        nextText: 34
                                                    }

                                                ]
                                            },
                                            {
                                                id: 32, 
                                                text: 'Your strategy failed! Candidates failed to comply, and little amounts continued to trickle in, not nearly enough the required to get more members elected into Congress. You were laid off from your job, and you never went back into the political arena ever again! You lost'
                                            },
                                            {
                                                id: 33,
                                                text: 'No one likes a quitter! You decided to resign as Economic Advisor, except no one ever wanted you back as you applied to more positions. You ultimately found a typical office job and never returned to the political field. You lost!'
                                            },
                                            {
                                                id: 34,
                                                text: 'You either failed to the LSAT or you decided to not take that career route. With a political science degree, you decide to...',
                                                options: [
                                                    {
                                                        text: 'Enter the working force and become a public relations manager for a local business',
                                                        nextText: 35
                                                    },
                                                    {
                                                        text: 'Work at a non-profit to enhance the lives of those currently residing below the poverty level',
                                                        nextText: 36
                                                    },
                                                ]
                                            },
                                            {
                                                id: 35,
                                                text: 'You decide to become a public relations manager for a local business. As a public relations manager, you outreach to customers in providing a long-lasting message. After working for a few years at the public relations office, you decide that it\'s time for a career change.',
                                                options: [
                                                    
                                                ]

                                            }



                                        




        
 ]
startGame()
