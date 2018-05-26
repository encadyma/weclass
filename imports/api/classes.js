// Write code that creates a Mongo collection for classes.

// Use https://www.meteor.com/tutorials/react/collections to guide you.

// Please also do the same for students.

import { Mongo } from 'meteor/mongo';

export const Classes = new Mongo.Collection('classes');

/**
 * Sample Class:
 * {
 *    _id: "5b08aa5bc2dbb44264d130c5",
 *    students: ["5b08a83ec2dbb44264d130c4"],
 *    gradYear: 2018,
 *    school: "LCHS",
 *    inviteCode: "seniors2018",
 *    timestamp: new Date()
 * }
 */