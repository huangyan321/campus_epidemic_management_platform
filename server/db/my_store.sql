/*
 Navicat MySQL Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : my_store

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 12/09/2021 13:53:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class`  (
  `c_id` int(0) NOT NULL,
  `classes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`c_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for health
-- ----------------------------
DROP TABLE IF EXISTS `health`;
CREATE TABLE `health`  (
  `h_id` int(0) NOT NULL AUTO_INCREMENT,
  `u_id` int(0) NULL DEFAULT NULL,
  `temperature` float NULL DEFAULT NULL,
  `hot` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `gohubei` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `hubeiren` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `fever` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `leaveout` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `hesuan` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `mask` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `masknum` int(0) NULL DEFAULT NULL,
  `kills` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`h_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1015 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of health
-- ----------------------------
INSERT INTO `health` VALUES (1001, 101, 36.5, 'false', 'false', 'false', 'false', 'false', 'true', 'true', 11, 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES (1002, 102, 36.8, 'false', 'false', 'false', 'false', 'true', 'true', 'true', 21, 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES (1003, 103, 37.5, 'true', 'true', 'false', 'true', 'true', 'true', 'true', 21, 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES (1004, 104, 38.2, 'false', 'false', 'false', 'false', 'true', 'true', 'true', 21, 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES (1005, 105, 36.8, 'false', 'false', 'false', 'false', 'true', 'true', 'true', 21, 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES (1006, 106, 36.8, 'false', 'false', 'false', 'false', 'true', 'true', 'true', 21, 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES (1007, 107, 36.8, 'false', 'false', 'false', 'false', 'true', 'true', 'true', 21, 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES (1008, 108, 36.4, 'false', 'false', 'false', 'false', 'true', 'true', 'true', 21, 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES (1009, 109, 37.1, 'false', 'false', 'false', 'false', 'true', 'true', 'true', 21, 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES (1010, 110, 37.9, 'false', 'false', 'false', 'false', 'true', 'true', 'true', 21, 'true', '2021-09-02 11:19:33');
INSERT INTO `health` VALUES (1013, 101, 39, 'false', 'false', 'false', 'false', 'false', 'false', 'true', 23, 'true', '2021-09-01 15:29:11');
INSERT INTO `health` VALUES (1015, 101, 39, 'false', ' ', 'false', 'false', 'false', 'false', 'true', 23, 'true', '2021-09-02 11:14:04');

-- ----------------------------
-- Table structure for leavetable
-- ----------------------------
DROP TABLE IF EXISTS `leavetable`;
CREATE TABLE `leavetable`  (
  `l_id` int(0) NOT NULL AUTO_INCREMENT,
  `u_id` int(0) NULL DEFAULT NULL,
  `reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `leavetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `starttime` datetime(0) NULL DEFAULT NULL,
  `endtime` datetime(0) NULL DEFAULT NULL,
  `state` int(0) NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `classes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`l_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of leavetable
-- ----------------------------
INSERT INTO `leavetable` VALUES (1, 101, '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', 2, '2021-09-02 14:27:03', '高三九班');
INSERT INTO `leavetable` VALUES (2, 101, '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', 2, '2021-09-02 14:27:05', '高三九班');
INSERT INTO `leavetable` VALUES (3, 101, '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', 0, '2021-09-02 14:27:07', '高三九班');
INSERT INTO `leavetable` VALUES (4, 101, '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', 0, '2021-09-02 00:00:00', '高三九班');
INSERT INTO `leavetable` VALUES (5, 101, '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', 0, '2021-09-02 14:01:40', '高三九班');
INSERT INTO `leavetable` VALUES (6, 101, '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', 0, '2021-09-02 14:04:38', '高三九班');
INSERT INTO `leavetable` VALUES (7, 101, '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', 1, '2021-09-02 14:05:12', '高三九班');

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice`  (
  `n_id` int(0) NOT NULL AUTO_INCREMENT,
  `title` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `class` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`n_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 222 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notice
-- ----------------------------
INSERT INTO `notice` VALUES (201, '放假通知', '9月3日(周四)至5日(周六)调休放假，共3天。其中9月3日(周四)为胜利日放假一天，9月4日(周五)调整休假，9月6日(周日)调整上班。', '2021-09-01 09:31:18', '高三1班;高三2班;高三9班');
INSERT INTO `notice` VALUES (202, '停课通知', '按照校历安排，学院定于xxx3年11月8日(星期五)—11月9日(星期六)举行第二十一届校运会。11月8日、9日全校停课两天，补课自行安排。', '2021-09-01 09:33:11', '高三1班;高三二班;高三3班;高三9班');
INSERT INTO `notice` VALUES (203, '哈哈哈asd', '阿三大苏打', '2021-09-01 09:34:09', '高三1班;高三二班;高三3班;高三4班;高三5班;高三9班');
INSERT INTO `notice` VALUES (204, 'asfafa', '你好呀阿三大苏打', '2021-09-01 09:34:54', '高三9班');
INSERT INTO `notice` VALUES (205, '休学通知', '你休学了', '2021-09-01 09:35:40', '高三1班;高三9班');
INSERT INTO `notice` VALUES (206, '休学通知', '你休学了', '2021-09-01 09:35:40', '高三1班;高三9班');
INSERT INTO `notice` VALUES (207, '休学通知', '你休学了', '2021-09-01 09:35:40', '高三1班;高三9班');
INSERT INTO `notice` VALUES (208, '休学通知', '你休学了', '2021-09-01 09:35:40', '高三1班;高三9班');
INSERT INTO `notice` VALUES (209, '休学通知', '你休学了', '2021-09-01 09:35:40', '高三1班;高三9班');
INSERT INTO `notice` VALUES (210, '休学通知', '你休学了', '2021-09-01 09:35:40', '高三1班;高三9班');
INSERT INTO `notice` VALUES (211, '你好阿松大', NULL, NULL, '高三9班');
INSERT INTO `notice` VALUES (212, '你好阿松大', NULL, '2021-09-03 16:12:06', '高三9班');
INSERT INTO `notice` VALUES (213, '请问请问', NULL, '2021-09-03 16:15:06', '高三9班');
INSERT INTO `notice` VALUES (214, '第三方是', NULL, '2021-09-03 16:15:26', '高三9班');
INSERT INTO `notice` VALUES (215, 'asdasdasd', NULL, '2021-09-03 17:36:57', '高三9班');
INSERT INTO `notice` VALUES (216, '123123', NULL, '2021-09-04 18:07:07', '高三9班');
INSERT INTO `notice` VALUES (217, '123123', NULL, '2021-09-04 18:13:49', '高三9班');
INSERT INTO `notice` VALUES (218, '123123', NULL, '2021-09-04 18:13:57', '高三9班');
INSERT INTO `notice` VALUES (219, '123123', NULL, '2021-09-09 23:56:34', '高三9班');
INSERT INTO `notice` VALUES (220, '123123', NULL, '2021-09-12 04:07:53', '高三9班');
INSERT INTO `notice` VALUES (221, '123123', NULL, '2021-09-12 04:07:59', '高三9班');

-- ----------------------------
-- Table structure for readtable
-- ----------------------------
DROP TABLE IF EXISTS `readtable`;
CREATE TABLE `readtable`  (
  `r_id` int(0) NOT NULL AUTO_INCREMENT,
  `u_id` int(0) NULL DEFAULT NULL,
  `n_id` int(0) NULL DEFAULT NULL,
  `readtime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`r_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of readtable
-- ----------------------------
INSERT INTO `readtable` VALUES (1, 101, 201, '2021-09-01 10:25:19');
INSERT INTO `readtable` VALUES (2, 102, 202, '2021-09-01 10:25:21');
INSERT INTO `readtable` VALUES (3, 101, 203, '2021-09-01 10:25:23');
INSERT INTO `readtable` VALUES (4, 101, 204, '2021-09-01 10:25:25');
INSERT INTO `readtable` VALUES (6, 102, 204, '2021-09-01 10:25:31');
INSERT INTO `readtable` VALUES (7, 103, 201, '2021-09-01 10:25:33');
INSERT INTO `readtable` VALUES (8, 104, 201, '2021-09-01 10:25:35');
INSERT INTO `readtable` VALUES (9, 101, 202, '2021-09-01 10:35:46');
INSERT INTO `readtable` VALUES (11, 101, 205, '2021-09-01 10:45:01');

-- ----------------------------
-- Table structure for usertable
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable`  (
  `id` int(0) NOT NULL,
  `token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `head` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `mailbox` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `createtime` datetime(0) NULL DEFAULT NULL,
  `modifytime` datetime(0) NULL DEFAULT NULL,
  `classes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `type` int(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES (101, NULL, 'admin', '123456', 'cat.jpg', NULL, '福建龙岩', '男', '2021-08-31 16:09:38', '2021-08-31 16:09:40', '高三9班', 1);
INSERT INTO `usertable` VALUES (102, NULL, '我吃西红柿', '123456', 'cat.jpg', NULL, '福建南平', '男', '2021-08-30 22:56:46', '2021-08-30 22:56:49', '高三9班', 2);
INSERT INTO `usertable` VALUES (103, NULL, '亚瑟', '123456', 'cat.jpg', NULL, '王者峡谷', '男', '2021-08-30 22:58:02', '2021-08-30 22:58:06', '高一七班', 2);
INSERT INTO `usertable` VALUES (104, NULL, '安琪拉', '123546', 'cat.jpg', NULL, '福建莆田', '女', '2021-08-30 22:59:14', '2021-08-30 22:59:19', '高一九班', 2);
INSERT INTO `usertable` VALUES (105, NULL, '妲己', '123456', 'cat.jpg', NULL, '福建厦门', '女', '2021-08-30 22:59:48', '2021-08-30 22:59:46', '高三九班', 3);
INSERT INTO `usertable` VALUES (106, NULL, '王昭君', '123456', 'cat.jpg', NULL, '福建龙岩', '女', '2021-08-30 23:00:51', '2021-08-30 23:00:54', '高二一班', 3);
INSERT INTO `usertable` VALUES (107, NULL, '宫本武藏', '123456', 'cat.jpg', NULL, '福建龙岩', '男', '2019-06-06 23:01:59', '2021-08-30 23:01:49', '高二五班', 2);
INSERT INTO `usertable` VALUES (108, NULL, '柯南', '123456', 'cat.jpg', NULL, '福建漳州', '男', '2021-08-30 23:02:08', '2021-08-30 23:01:52', '高二四班', 2);
INSERT INTO `usertable` VALUES (109, NULL, '喜羊羊', '123456', 'cat.jpg', NULL, '福建泉州', '女', '2021-08-30 23:02:12', '2021-08-30 23:01:55', '高二三班', 2);
INSERT INTO `usertable` VALUES (110, NULL, '韩信', '123456', 'cat.jpg', NULL, '福建福州', '女', '2021-08-12 23:02:15', '2021-08-30 23:01:57', '高二二班', 3);
INSERT INTO `usertable` VALUES (112, NULL, '典韦', '123456', 'cat.jpg', NULL, '福建福州', '女', '2021-08-31 10:28:38', '2021-08-31 10:28:43', '高三九班', 1);
INSERT INTO `usertable` VALUES (113, NULL, '李白', '123456', 'cat.jpg', NULL, '福建福州', '女', '2021-08-31 10:28:51', '2021-08-31 10:28:45', '高二九班', 2);
INSERT INTO `usertable` VALUES (114, NULL, '张飞', '123456', 'cat.jpg', NULL, '福建福州', '女', '2021-08-31 10:28:54', '2021-08-31 10:28:48', '高一七班', 2);
INSERT INTO `usertable` VALUES (115, NULL, '刘备', '123456', 'cat.jpg', NULL, '福建龙岩', '女', '2021-08-31 10:28:58', '2021-08-31 10:30:11', '高一九班', 2);
INSERT INTO `usertable` VALUES (116, NULL, '关羽', '123456', 'cat.jpg', NULL, '福建龙岩', '女', '2021-08-31 10:29:02', '2021-08-31 10:30:10', '高三九班', 1);
INSERT INTO `usertable` VALUES (117, NULL, '马超', '123456', 'cat.jpg', NULL, '福建龙岩', '男', '2021-08-31 10:29:05', '2021-08-31 10:30:06', '高二一班', 2);
INSERT INTO `usertable` VALUES (119, NULL, '韩信', '123456', 'cat.jpg', NULL, '福建龙岩', '女', '2021-08-31 10:29:10', '2021-09-02 15:52:06', '高二四班', 2);
INSERT INTO `usertable` VALUES (120, NULL, '曹操', '123456', 'cat.jpg', NULL, '福建龙岩', '男', '2021-08-31 10:29:11', '2021-08-31 10:30:02', '高二三班', 2);
INSERT INTO `usertable` VALUES (121, NULL, '孙策', '123456', 'cat.jpg', NULL, '福建龙岩', '男', '2021-08-31 10:29:13', '2021-08-31 10:29:58', '高二二班', 3);
INSERT INTO `usertable` VALUES (126, NULL, '澜', '123456', 'cat.jpg', NULL, '福建龙岩', '男', '2021-08-31 10:29:26', '2021-08-31 10:29:49', '高三九班', 2);
INSERT INTO `usertable` VALUES (127, NULL, '孙悟空', '123456', 'cat.jpg', NULL, '福建龙岩', '男', '2021-08-31 10:29:28', '2021-08-31 10:29:46', '高二一班', 3);
INSERT INTO `usertable` VALUES (128, NULL, '夏洛特', '123456', 'cat.jpg', NULL, '福建龙岩', '男', '2021-08-31 10:29:29', '2021-08-31 10:29:42', '高二五班', 3);
INSERT INTO `usertable` VALUES (129, NULL, '夏侯惇', '123456', 'cat.jpg', NULL, '福建福州', '男', '2021-08-31 10:29:33', '2021-08-31 10:29:40', '高二四班', 2);
INSERT INTO `usertable` VALUES (130, NULL, '武则天', '123456', 'cat.jpg', NULL, '福建龙岩', '男', '2021-08-31 10:29:36', '2021-08-31 10:29:38', '高二三班', 1);
INSERT INTO `usertable` VALUES (131, NULL, '谢渟渟', '520520', 'cat.jpg', NULL, '福建南平', '女', '2021-09-12 13:42:44', '2021-09-12 13:42:47', '高三9班', 2);

SET FOREIGN_KEY_CHECKS = 1;
