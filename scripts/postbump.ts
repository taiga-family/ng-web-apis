import {version} from '../package.json';
import {syncVersions} from './sync-versions';

syncVersions(['./libs', './package-lock.json'], version, []);
