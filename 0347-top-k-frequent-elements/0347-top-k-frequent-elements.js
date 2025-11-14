/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    // 빈도수 계산
    const freqMap = new Map();
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Bucket 생성
    const buckets = Array.from({ length: nums.length + 1 }, () => []);
    
    // 빈도수별로 분류
    for (const [num, freq] of freqMap) {
        buckets[freq].push(num);
    }
    
    // 상위 k개 선택
    const result = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...buckets[i]);
    }
    
    return result.slice(0, k);
};