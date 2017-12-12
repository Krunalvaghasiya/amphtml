/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {dev} from './log';

const TAG = 'AMP.require';

/**
 * Allows `require`ing modules exported by a browserify bundle.
 * Use with `AMP.includeExternalBundle()` once in an extension.
 *
 * @param {string} module
 * @return {?}
 */
export function requireExternal(module) {
  if (AMP.require) {
    return AMP.require(module);
  } else {
    dev().error(TAG, `Could not require external module '${module}'.` +
        ' Did you call AMP.includeExternalBundle() in the extension?');
  }
}