const maxSubArray = (nums) => {
  let currentMax = nums[0]; // 현재 위치까지의 최대 합
  let globalMax = nums[0]; // 전체 최대 합

  for (let i = 1; i < nums.length; i++) {
    // 핵심: 이전 합에 더할지 vs 새로 시작할지
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    globalMax = Math.max(globalMax, currentMax);
  }

  return globalMax;
};
