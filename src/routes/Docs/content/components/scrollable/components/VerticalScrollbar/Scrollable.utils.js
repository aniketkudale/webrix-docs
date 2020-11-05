/**
 * Copyright (c) 2020, Amdocs Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MIN_THUMB_SIZE = 0.2;

export const getThumbSize = (trackLength, scrollLength) => {
    const portion = trackLength / scrollLength;
    return Math.round(trackLength * (MIN_THUMB_SIZE + (1 - MIN_THUMB_SIZE) * portion));
};

export const getThumbPosition = (trackLength, scrollLength, scrollPos) => {
    const portion = (trackLength / scrollLength) * (1 - MIN_THUMB_SIZE);
    return Math.round(scrollPos * portion);
};
