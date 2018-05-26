import { Mongo } from 'meteor/mongo';

export const Students = new Mongo.Collection('students');


/**
 * Sample Student:
 * {
 *    _id: "5b08a83ec2dbb44264d130c4",
 *    name: "John Doe",
 *    bio: "When Life gives you lemons",
 *    instagram: "johnny_dote",
 *    facebook: "john_doe",
 *    twitter: "jddoe",
 *    currentLocation: "Santa Barbara",
 *    emoticon: "",
 * }
 * {
     name: "George Washington",
     bio: "Feeling good about today",
     instagram: "georgey_washy",
     facebook: "george_washington",
     twitter: "ggwash",
     currentLocation: "United States",
     emoticon: "smile"
  }
  {
     name: "Thomas Jefferson",
     bio: "Revolutionary, clean life.",
     instagram: "thomas_jeffy",
     facebook: "thom_jef",
     twitter: "tjef",
     currentLocation: "Los Angeles",
     emoticon: "heart",
  }
  {
     name: "Abraham Lincoln",
     bio: "Proud to serve as the 16th",
     instagram: "abbs_linc",
     facebook: "abraham_lincoln",
     twitter: "alinc",
     currentLocation: "afterlife",
     emoticon: "lollipop",
  }
  {
     name: "Shinzo Abe",
     bio: "Abe Shinzo. Prime Minister of Japan.",
     instagram: "shin_abe",
     facebook: "shinzo_abe",
     twitter: "sabe",
     currentLocation: "Japan",
     emoticon: "hamburger",
  }
  {
     name: "Yuzuru Nishimiya",
     bio: "I like rollercoasters.",
     instagram: "yuzu_nishi",
     facebook: "yuzuru_nishimiya",
     twitter: "ynishi",
     currentLocation: "Japan",
     emoticon: "hamburger",
  }
 */

/*
db.students.update({_id: ObjectId("5b08a83ec2dbb44264d130c4")}, {$set: { name: "John Doe", bio: "When life gives you lemons", instagram: "johnny_dote", facebook: "john_doe", twitter: "jddoe", currentLocation: "Santa Barabara", emoticon: "eyes"}});
*/