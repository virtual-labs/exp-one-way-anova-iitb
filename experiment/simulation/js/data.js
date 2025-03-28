// ============= Global variable ============ //
// let z_table_data = z_table.map((data) => {
// 	let arr: number[] = [];
// 	arr.push(data.z);
// 	arr.push(data['0.01']);
// 	arr.push(data['0.05']);
// 	return arr;
// });
// let chi_sq_table_data: number[][] = [];
// for (let i = 18; i < 29; i++) {
// 	let arr: number[] = [];
// 	arr.push(chi_sq_dist_table[i].df);
// 	arr.push(chi_sq_dist_table[i]['0.05']);
// 	arr.push(chi_sq_dist_table[i]['0.01']);
// 	chi_sq_table_data.push(arr);
// }
let f_table_data = f_table_pt_05.map((data) => {
    let arr = [];
    Object.keys(data).forEach((key) => {
        if (key === 'df2') {
            arr.unshift(data[key]);
        }
        else {
            arr.push(data[key]);
        }
    });
    return arr;
});
let alpha = 0.05;
let k = 5;
//================= Activity 1 Variable =============//
let n = 15;
//in ui mu is refered as y
let mu1 = [
    36.032, 37.937, 44.842, 50.983, 43.002, 35.023, 50.081, 33.243, 36.065,
    21.82, 28.293, 45.579, 50.255, 24.296, 49.657,
];
let mu2 = [
    46.037, 29.353, 21.963, 50.171, 26.984, 34.007, 29.719, 33.575, 34.52,
    38.61, 47.318, 25.138, 29.762, 21.12, 47.287,
];
let mu3 = [
    23.634, 31.423, 40.782, 29.799, 37.64, 26.239, 22.925, 35.502, 21.135,
    26.523, 35.619, 20.785, 34.332, 23.474, 49.299,
];
let mu4 = [
    40.526, 45.163, 50.383, 35.724, 36.854, 35.022, 47.455, 30.58, 38.934,
    47.937, 47.484, 42.112, 35.973, 40.085, 24.397,
];
let mu5 = [
    41.277, 28.62, 28.188, 29.564, 48.884, 24.593, 23.443, 42.923, 26.525,
    50.387, 23.684, 28.042, 38.46, 36.563, 36.5,
];
//in ui mu is refered as y
let mu1_bar = 39.141;
let mu2_bar = 34.371;
let mu3_bar = 30.607;
let mu4_bar = 39.909;
let mu5_bar = 33.844;
//in ui this is refered to y bar
let mu_bar;
let S1_sq = 85.218;
let S2_sq = 84.091;
let S3_sq = 62.142;
let S4_sq = 46.745;
let S5_sq = 74.675;
let Se_sq = 70.574;
let Sy_sq = 15.157;
let n_Sy_sq = 227.355;
let F = 3.222;
let F_alpha = 2.5122;
let df1 = k - 1;
let df2 = k * (n - 1);
let sum_mu1_mu1_bar_sq = 1293.272;
let sum_mu2_mu2_bar_sq = 1276.368;
let sum_mu3_mu3_bar_sq = 947.126;
let sum_mu4_mu4_bar_sq = 716.172;
let sum_mu5_mu5_bar_sq = 1135.121;
let act1_table_data = [
    [36.032, 46.037, 23.634, 40.526, 41.277],
    [37.937, 29.353, 31.423, 45.163, 28.62],
    [44.842, 21.963, 40.782, 50.383, 28.188],
    [50.983, 50.171, 29.799, 35.724, 29.564],
    [43.002, 26.984, 37.64, 36.854, 48.884],
    [35.023, 34.007, 26.239, 35.022, 24.593],
    [50.081, 29.719, 22.925, 47.455, 23.443],
    [33.243, 33.575, 35.502, 30.58, 42.923],
    [36.065, 34.52, 21.135, 38.934, 26.525],
    [21.82, 38.61, 26.523, 47.937, 50.387],
    [28.293, 47.318, 35.619, 47.484, 23.684],
    [45.579, 25.138, 20.785, 42.112, 28.042],
    [50.255, 29.762, 34.332, 35.973, 38.46],
    [24.296, 21.12, 23.474, 40.085, 36.563],
    [49.657, 47.287, 49.299, 24.397, 36.5],
];
let act1_table_data2 = [];
let hypo_test_reject_op_a1 = 1;
// ================ Activity2 variables ================ //
//length of vectors
let n_a2 = [8, 10, 12, 13, 15];
let N = 58;
let SSb = 30.162;
let SSw = 4757.575;
let SSt = 4787.737;
//array of vectors
let mu_a2 = [
    [29.539, 47.321, 45.649, 29.504, 32.323, 29.024, 47.582, 27.871],
    [
        26.51, 31.609, 37.632, 44.96, 49.191, 49.999, 22.372, 22.126, 50.628,
        30.714,
    ],
    [
        29.96, 24.631, 40.631, 43.903, 36.505, 50.328, 46.008, 36.774, 35.455,
        34.644, 35.365, 20.491,
    ],
    [
        50.65, 27.186, 28.257, 23.843, 21.206, 46.634, 41.911, 46.29, 22.946,
        50.637, 40.546, 45.072, 40.218,
    ],
    [
        46.587, 28.027, 42.897, 40.776, 43.213, 36.685, 32.161, 22.151, 35.249,
        34.397, 31.464, 32.123, 43.89, 24.684, 35.191,
    ],
];
//summation of vectors
let sum_mu = [288.813, 365.741, 434.695, 485.396, 529.495];
//mean of vectors
let bar_mu = [36.102, 36.574, 36.225, 37.338, 35.3];
//variance of vectors
let S_mu = [567.536, 1179.095, 798.408, 1454.953, 727.403];
//summation (yi - yibar)^2
// let sum_y_y_bar_sq_mu: number[] = [];
let mu_bar_a2 = 36.308;
let F_a2 = 0.084;
let F_alpha_a2 = 2.5532;
let a2_table_data1 = [
    [29.539, 26.51, 29.96, 50.65, 46.587],
    [47.321, 31.609, 24.631, 27.186, 28.027],
    [45.649, 37.632, 40.631, 28.257, 42.897],
    [29.504, 44.96, 43.903, 23.843, 40.776],
    [32.323, 49.191, 36.505, 21.206, 43.213],
    [29.024, 49.999, 50.328, 46.634, 36.685],
    [47.582, 22.372, 46.008, 41.911, 32.161],
    [27.871, 22.126, 36.774, 46.29, 22.151],
    ['', 50.628, 35.455, 22.946, 35.249],
    ['', 30.714, 34.644, 50.637, 34.397],
    ['', '', 35.365, 40.546, 31.464],
    ['', '', 20.491, 45.072, 32.123],
    ['', '', '', 40.218, 43.89],
    ['', '', '', '', 24.684],
    ['', '', '', '', 35.191],
];
let hypo_test_reject_op_a2 = 2;
//# sourceMappingURL=data.js.map