// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone number with dashes', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number with dots', () => {
  expect(isPhoneNumber('123.456.7890')).toBe(false);
});

test('invalid phone number too short', () => {
  expect(isPhoneNumber('123-456')).toBe(false);
});

test('valid email', () => {
  expect(isEmail('student@test.com')).toBe(true);
});

test('valid email with short domain', () => {
  expect(isEmail('abc@school.edu')).toBe(true);
});

test('invalid email missing at sign', () => {
  expect(isEmail('student.test.com')).toBe(false);
});

test('invalid email missing extension', () => {
  expect(isEmail('student@test')).toBe(false);
});

test('valid strong password with letters and numbers', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('valid strong password with underscore', () => {
  expect(isStrongPassword('A_123')).toBe(true);
});

test('invalid password starts with number', () => {
  expect(isStrongPassword('1abc123')).toBe(false);
});

test('invalid password too short', () => {
  expect(isStrongPassword('abc')).toBe(false);
});

test('valid date with one digit month/day', () => {
  expect(isDate('1/2/2024')).toBe(true);
});

test('valid date with two digit month/day', () => {
  expect(isDate('12/25/2024')).toBe(true);
});

test('invalid date with dashes', () => {
  expect(isDate('12-25-2024')).toBe(false);
});

test('invalid date with two digit year', () => {
  expect(isDate('12/25/24')).toBe(false);
});

test('valid 3 character hex color', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('valid 6 character hex color without hash', () => {
  expect(isHexColor('00ffAA')).toBe(true);
});

test('invalid hex color with bad character', () => {
  expect(isHexColor('#ggg')).toBe(false);
});

test('invalid hex color too short', () => {
  expect(isHexColor('#ff')).toBe(false);
});