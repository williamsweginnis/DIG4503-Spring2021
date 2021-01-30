
import Fetch from './Fetch.js';

const valid = new Fetch("gengar" , "BBB2FF");
valid.fetch();

const invalid = new Fetch("squirtle");
invalid.fetch();