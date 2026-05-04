# Lab 5 - Starter

My name: Anish Kondamadugula

Expose Page: https://arkondamadugula.github.io/CSE_110-Lab_5/expose.html
Explore Page: https://arkondamadugula.github.io/CSE_110-Lab_5/explore.html



## 1. 
I wouldn't just use a unit test to test the "message" feature of a messaging application, because semnding a message is dependent on various parts working together, like the UI, input handling, server/database, and message display. A unit test could be helpful for testing a helper function corressponding to messages, but the full send-message feature must be tested with an integration or end-to-end test.

## 2.
I would use a unit test to test the "max message length" feature of a messaging application, because if the user shouldn't be able to type over 80 characters, this can be tested as a small isolated piece of logic. I would test that messages with 80 or less characters are allowed and those that are over 80 characters are rejected or prevented.