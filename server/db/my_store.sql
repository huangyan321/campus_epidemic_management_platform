/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80026
Source Host           : localhost:3306
Source Database       : my_store

Target Server Type    : MYSQL
Target Server Version : 80026
File Encoding         : 65001

Date: 2021-09-10 15:10:07
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for class
-- ----------------------------
DROP TABLE IF EXISTS `class`;
CREATE TABLE `class` (
  `c_id` int NOT NULL,
  `classes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`c_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of class
-- ----------------------------

-- ----------------------------
-- Table structure for health
-- ----------------------------
DROP TABLE IF EXISTS `health`;
CREATE TABLE `health` (
  `h_id` int NOT NULL AUTO_INCREMENT,
  `u_id` int DEFAULT NULL,
  `temperature` float DEFAULT NULL,
  `hot` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `gohubei` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `hubeiren` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `fever` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `leaveout` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `hesuan` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `mask` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `masknum` int DEFAULT NULL,
  `kills` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  PRIMARY KEY (`h_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1016 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of health
-- ----------------------------
INSERT INTO `health` VALUES ('1001', '101', '36.5', 'false', 'false', 'false', 'false', 'false', 'true', 'true', '11', 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES ('1002', '102', '36.8', 'false', 'false', 'false', 'false', 'true', 'true', 'true', '21', 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES ('1003', '103', '37.5', 'true', 'true', 'false', 'true', 'true', 'true', 'true', '21', 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES ('1004', '104', '38.2', 'false', 'false', 'false', 'false', 'true', 'true', 'true', '21', 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES ('1005', '105', '36.8', 'false', 'false', 'false', 'false', 'true', 'true', 'true', '21', 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES ('1006', '106', '36.8', 'false', 'false', 'false', 'false', 'true', 'true', 'true', '21', 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES ('1007', '107', '36.8', 'false', 'false', 'false', 'false', 'true', 'true', 'true', '21', 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES ('1008', '108', '36.4', 'false', 'false', 'false', 'false', 'true', 'true', 'true', '21', 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES ('1009', '109', '37.1', 'false', 'false', 'false', 'false', 'true', 'true', 'true', '21', 'true', '2021-09-01 10:50:09');
INSERT INTO `health` VALUES ('1010', '110', '37.9', 'false', 'false', 'false', 'false', 'true', 'true', 'true', '21', 'true', '2021-09-02 11:19:33');
INSERT INTO `health` VALUES ('1013', '101', '39', 'false', 'false', 'false', 'false', 'false', 'false', 'true', '23', 'true', '2021-09-01 15:29:11');
INSERT INTO `health` VALUES ('1015', '101', '39', 'false', ' ', 'false', 'false', 'false', 'false', 'true', '23', 'true', '2021-09-02 11:14:04');

-- ----------------------------
-- Table structure for leavetable
-- ----------------------------
DROP TABLE IF EXISTS `leavetable`;
CREATE TABLE `leavetable` (
  `l_id` int NOT NULL AUTO_INCREMENT,
  `u_id` int DEFAULT NULL,
  `reason` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `leavetype` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `starttime` datetime DEFAULT NULL,
  `endtime` datetime DEFAULT NULL,
  `state` int DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `classes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`l_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of leavetable
-- ----------------------------
INSERT INTO `leavetable` VALUES ('1', '101', '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', '2', '2021-09-02 14:27:03', '高三九班');
INSERT INTO `leavetable` VALUES ('2', '101', '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', '2', '2021-09-02 14:27:05', '高三九班');
INSERT INTO `leavetable` VALUES ('3', '101', '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', '0', '2021-09-02 14:27:07', '高三九班');
INSERT INTO `leavetable` VALUES ('4', '101', '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', '0', '2021-09-02 00:00:00', '高三九班');
INSERT INTO `leavetable` VALUES ('5', '101', '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', '0', '2021-09-02 14:01:40', '高三九班');
INSERT INTO `leavetable` VALUES ('6', '101', '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', '0', '2021-09-02 14:04:38', '高三九班');
INSERT INTO `leavetable` VALUES ('7', '102', '不舒服', '病假', '2021-09-02 00:00:00', '2021-09-03 00:00:00', '2', '2021-09-02 14:05:12', '高三九班');
INSERT INTO `leavetable` VALUES ('12', '102', '啊实打实打算', '事假', '2021-08-31 00:00:00', '2021-09-01 00:00:00', '0', '2021-09-08 10:07:00', '高三9班');
INSERT INTO `leavetable` VALUES ('13', '102', 'fck', '事假', '2021-09-01 00:00:00', '2021-10-06 00:00:00', '0', '2021-09-08 10:07:42', '高三9班');
INSERT INTO `leavetable` VALUES ('14', '102', 'ffffffffck', '事假', '2021-09-02 00:00:00', '2021-10-07 00:00:00', '0', '2021-09-08 10:07:55', '高三9班');
INSERT INTO `leavetable` VALUES ('15', '102', '快点给我批下来', '事假', '2021-09-01 00:00:00', '2021-10-15 00:00:00', '0', '2021-09-08 10:08:09', '高三9班');
INSERT INTO `leavetable` VALUES ('16', '102', '啊实打实大大', '事假', '2021-09-02 00:00:00', '2021-10-07 00:00:00', '0', '2021-09-08 10:08:23', '高三9班');
INSERT INTO `leavetable` VALUES ('17', '102', '啊实打实大大', '事假', '2021-09-02 00:00:00', '2021-10-07 00:00:00', '0', '2021-09-08 10:08:27', '高三9班');

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `n_id` int NOT NULL AUTO_INCREMENT,
  `title` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `content` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `createtime` datetime DEFAULT NULL,
  `class` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`n_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=283 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of notice
-- ----------------------------
INSERT INTO `notice` VALUES ('218', '123123', null, '2021-09-06 08:44:31', '幼儿园1班');
INSERT INTO `notice` VALUES ('220', 'asdasd', null, '2021-09-08 10:37:50', '高三9班');
INSERT INTO `notice` VALUES ('221', 'asdasd', null, '2021-09-08 10:37:50', '高三9班');
INSERT INTO `notice` VALUES ('222', 'asdasd', null, '2021-09-08 10:37:51', '高三9班');
INSERT INTO `notice` VALUES ('223', 'asdasd', null, '2021-09-08 10:37:51', '高三9班');
INSERT INTO `notice` VALUES ('224', 'asdasd', null, '2021-09-08 10:37:52', '高三9班');
INSERT INTO `notice` VALUES ('225', 'asdasd', null, '2021-09-08 10:37:52', '高三9班');
INSERT INTO `notice` VALUES ('226', 'asdasd', null, '2021-09-08 10:37:53', '高三9班');
INSERT INTO `notice` VALUES ('227', 'asdasd', null, '2021-09-08 10:37:54', '高三9班');
INSERT INTO `notice` VALUES ('228', 'asdasd', null, '2021-09-08 10:37:54', '高三9班');
INSERT INTO `notice` VALUES ('229', 'asdasd', null, '2021-09-08 10:37:54', '高三9班');
INSERT INTO `notice` VALUES ('230', 'asdasd', null, '2021-09-08 10:37:54', '高三9班');
INSERT INTO `notice` VALUES ('231', 'asdasd', null, '2021-09-08 10:37:54', '高三9班');
INSERT INTO `notice` VALUES ('232', 'asdasd', null, '2021-09-08 10:37:55', '高三9班');
INSERT INTO `notice` VALUES ('233', 'asdasd', null, '2021-09-08 10:37:55', '高三9班');
INSERT INTO `notice` VALUES ('234', 'asdasd', null, '2021-09-08 10:37:55', '高三9班');
INSERT INTO `notice` VALUES ('235', 'asdasd', null, '2021-09-08 10:37:55', '高三9班');
INSERT INTO `notice` VALUES ('236', 'asdasd', null, '2021-09-08 10:37:56', '高三9班');
INSERT INTO `notice` VALUES ('239', 'asdasd', null, '2021-09-08 10:37:56', '高三9班');
INSERT INTO `notice` VALUES ('240', '新的通知', null, '2021-09-10 08:41:10', '高三9班');
INSERT INTO `notice` VALUES ('241', '新的通知', null, '2021-09-10 08:42:21', '高三9班');
INSERT INTO `notice` VALUES ('242', '新的通知', null, '2021-09-10 08:43:51', '高三9班');
INSERT INTO `notice` VALUES ('243', '新的通知', null, '2021-09-10 08:43:55', '高三9班');
INSERT INTO `notice` VALUES ('244', '新的通知', null, '2021-09-10 08:44:02', '高三9班');
INSERT INTO `notice` VALUES ('245', '新的通知', null, '2021-09-10 08:44:08', '高三9班');
INSERT INTO `notice` VALUES ('246', 'asdasd', null, '2021-09-10 09:11:12', '高三9班');
INSERT INTO `notice` VALUES ('247', 'asdasd', null, '2021-09-10 09:11:27', '高三9班');
INSERT INTO `notice` VALUES ('248', 'asdasd', null, '2021-09-10 09:11:29', '高三9班');
INSERT INTO `notice` VALUES ('249', 'asdasd', null, '2021-09-10 09:11:35', '高三9班');
INSERT INTO `notice` VALUES ('250', '123', null, '2021-09-10 09:18:27', '高三9班');
INSERT INTO `notice` VALUES ('251', '123', null, '2021-09-10 09:18:31', '高三9班');
INSERT INTO `notice` VALUES ('252', '123', null, '2021-09-10 09:18:39', '高三9班');
INSERT INTO `notice` VALUES ('253', '123', null, '2021-09-10 09:23:42', '高三9班');
INSERT INTO `notice` VALUES ('254', '234234', null, '2021-09-10 11:26:53', '高三9班');
INSERT INTO `notice` VALUES ('255', '234234', null, '2021-09-10 11:27:16', '高三9班');
INSERT INTO `notice` VALUES ('256', '你好世界', null, '2021-09-10 11:27:45', '高三9班');
INSERT INTO `notice` VALUES ('257', '你好世界', null, '2021-09-10 11:27:47', '高三9班');
INSERT INTO `notice` VALUES ('258', '123', null, '2021-09-10 11:38:54', '高三9班');
INSERT INTO `notice` VALUES ('259', '123', null, '2021-09-10 11:39:19', '高三9班');
INSERT INTO `notice` VALUES ('260', '123', null, '2021-09-10 11:40:28', '高三9班');
INSERT INTO `notice` VALUES ('261', '123', null, '2021-09-10 11:41:31', '高三9班');
INSERT INTO `notice` VALUES ('262', '啊实打实', null, '2021-09-10 11:42:02', '高三9班');
INSERT INTO `notice` VALUES ('263', '啊实打实', null, '2021-09-10 11:42:05', '高三9班');
INSERT INTO `notice` VALUES ('264', '啊实打实', null, '2021-09-10 11:42:07', '高三9班');
INSERT INTO `notice` VALUES ('265', '啊实打实', null, '2021-09-10 11:42:08', '高三9班');
INSERT INTO `notice` VALUES ('266', '啊实打实', null, '2021-09-10 11:42:09', '高三9班');
INSERT INTO `notice` VALUES ('267', '啊实打实', null, '2021-09-10 11:43:00', '高三9班');
INSERT INTO `notice` VALUES ('268', '啊实打实', null, '2021-09-10 11:43:05', '高三9班');
INSERT INTO `notice` VALUES ('269', '阿三大苏打', null, '2021-09-10 11:43:37', '高三9班');
INSERT INTO `notice` VALUES ('270', '阿三大苏打', null, '2021-09-10 11:43:39', '高三9班');
INSERT INTO `notice` VALUES ('271', '阿三大苏打', null, '2021-09-10 11:43:39', '高三9班');
INSERT INTO `notice` VALUES ('272', '阿三大苏打', null, '2021-09-10 11:45:29', '高三9班');
INSERT INTO `notice` VALUES ('273', '123123', null, '2021-09-10 11:46:41', '高三9班');
INSERT INTO `notice` VALUES ('274', '阿三大苏打', null, '2021-09-10 11:47:34', '高三9班');
INSERT INTO `notice` VALUES ('275', '阿三大苏打', null, '2021-09-10 11:47:49', '高三9班');
INSERT INTO `notice` VALUES ('276', '阿三大苏打', null, '2021-09-10 11:49:38', '高三9班');
INSERT INTO `notice` VALUES ('277', '阿三大苏打', null, '2021-09-10 11:50:21', '高三9班');
INSERT INTO `notice` VALUES ('278', '阿三大苏打', null, '2021-09-10 11:50:43', '高三9班');
INSERT INTO `notice` VALUES ('279', '阿松大', null, '2021-09-10 13:34:19', '高三9班');
INSERT INTO `notice` VALUES ('280', '阿三大苏打', null, '2021-09-10 13:41:02', '高三9班');
INSERT INTO `notice` VALUES ('281', '阿三大苏打', null, '2021-09-10 13:41:12', '高三9班');
INSERT INTO `notice` VALUES ('282', '阿三大苏打', null, '2021-09-10 13:41:13', '高三9班');

-- ----------------------------
-- Table structure for readtable
-- ----------------------------
DROP TABLE IF EXISTS `readtable`;
CREATE TABLE `readtable` (
  `r_id` int NOT NULL AUTO_INCREMENT,
  `u_id` int DEFAULT NULL,
  `n_id` int DEFAULT NULL,
  `readtime` datetime DEFAULT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of readtable
-- ----------------------------
INSERT INTO `readtable` VALUES ('1', '101', '201', '2021-09-01 10:25:19');
INSERT INTO `readtable` VALUES ('2', '102', '202', '2021-09-01 10:25:21');
INSERT INTO `readtable` VALUES ('3', '101', '203', '2021-09-01 10:25:23');
INSERT INTO `readtable` VALUES ('4', '101', '204', '2021-09-01 10:25:25');
INSERT INTO `readtable` VALUES ('6', '102', '204', '2021-09-01 10:25:31');
INSERT INTO `readtable` VALUES ('7', '103', '201', '2021-09-01 10:25:33');
INSERT INTO `readtable` VALUES ('8', '104', '201', '2021-09-01 10:25:35');
INSERT INTO `readtable` VALUES ('9', '101', '202', '2021-09-01 10:35:46');
INSERT INTO `readtable` VALUES ('11', '101', '205', '2021-09-01 10:45:01');

-- ----------------------------
-- Table structure for usertable
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `id` int NOT NULL,
  `token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `head` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `mailbox` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `modifytime` datetime DEFAULT NULL,
  `classes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `type` int DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES ('101', null, 'admin', '123456', 'cat.jpg', null, '福建龙岩', '男', '2021-08-31 16:09:38', '2021-08-31 16:09:40', '高三9班', '1');
INSERT INTO `usertable` VALUES ('102', null, '我吃西红柿', '123456', 'cat.jpg', null, '福建南平', '男', '2021-08-30 22:56:46', '2021-08-30 22:56:49', '高三9班', '2');
INSERT INTO `usertable` VALUES ('103', null, '亚瑟', '123456', 'cat.jpg', null, '王者峡谷', '男', '2021-08-30 22:58:02', '2021-08-30 22:58:06', '高一7班', '2');
INSERT INTO `usertable` VALUES ('104', null, '安琪拉', '123456', 'cat.jpg', null, '福建莆田', '女', '2021-08-30 22:59:14', '2021-08-30 22:59:19', '高一9班', '2');
INSERT INTO `usertable` VALUES ('105', null, '妲己', '123456', 'cat.jpg', null, '福建厦门', '女', '2021-08-30 22:59:48', '2021-08-30 22:59:46', '高三9班', '3');
INSERT INTO `usertable` VALUES ('106', null, '王昭君', '123456', 'cat.jpg', null, '福建龙岩', '女', '2021-08-30 23:00:51', '2021-08-30 23:00:54', '高三9班', '3');
INSERT INTO `usertable` VALUES ('107', null, '宫本武藏', '123456', 'cat.jpg', null, '福建龙岩', '男', '2019-06-06 23:01:59', '2021-08-30 23:01:49', '高二5班', '2');
INSERT INTO `usertable` VALUES ('108', null, '柯南', '123456', 'cat.jpg', null, '福建漳州', '男', '2021-08-30 23:02:08', '2021-08-30 23:01:52', '高二4班', '2');
INSERT INTO `usertable` VALUES ('109', null, '喜羊羊', '123456', 'cat.jpg', null, '福建泉州', '女', '2021-08-30 23:02:12', '2021-08-30 23:01:55', '高二3班', '2');
INSERT INTO `usertable` VALUES ('110', null, '韩信', '123456', 'cat.jpg', null, '福建福州', '女', '2021-08-12 23:02:15', '2021-08-30 23:01:57', '高二2班', '3');
INSERT INTO `usertable` VALUES ('111', null, '谢渟渟', '520520', 'cat.jpg', null, '福建福州', '女', '2021-08-30 23:51:58', '2021-08-30 23:52:00', '幼儿园1班', '1');
INSERT INTO `usertable` VALUES ('112', null, '典韦', '123456', 'cat.jpg', null, '福建福州', '女', '2021-08-31 10:28:38', '2021-08-31 10:28:43', '高三9班', '1');
INSERT INTO `usertable` VALUES ('113', null, '李白', '123456', 'cat.jpg', null, '福建福州', '女', '2021-08-31 10:28:51', '2021-08-31 10:28:45', '高二9班', '2');
INSERT INTO `usertable` VALUES ('114', null, '张飞', '123456', 'cat.jpg', null, '福建福州', '女', '2021-08-31 10:28:54', '2021-08-31 10:28:48', '高一7班', '2');
INSERT INTO `usertable` VALUES ('115', null, '刘备', '123456', 'cat.jpg', null, '福建龙岩', '女', '2021-08-31 10:28:58', '2021-08-31 10:30:11', '高一9班', '2');
INSERT INTO `usertable` VALUES ('116', null, '关羽', '123456', 'cat.jpg', null, '福建龙岩', '女', '2021-08-31 10:29:02', '2021-08-31 10:30:10', '高三9班', '1');
INSERT INTO `usertable` VALUES ('117', null, '马超', '123456', 'cat.jpg', null, '福建龙岩', '男', '2021-08-31 10:29:05', '2021-08-31 10:30:06', '高二1班', '2');
INSERT INTO `usertable` VALUES ('119', null, '韩信', '123456', 'cat.jpg', null, '福建龙岩', '女', '2021-08-31 10:29:10', '2021-09-02 15:52:06', '高二4班', '2');
INSERT INTO `usertable` VALUES ('120', null, '曹操', '123456', 'cat.jpg', null, '福建龙岩', '男', '2021-08-31 10:29:11', '2021-08-31 10:30:02', '高二3班', '2');
INSERT INTO `usertable` VALUES ('121', null, '孙策', '123456', 'cat.jpg', null, '福建龙岩', '男', '2021-08-31 10:29:13', '2021-08-31 10:29:58', '高二2班', '3');
INSERT INTO `usertable` VALUES ('126', null, '澜', '123456', 'cat.jpg', null, '福建龙岩', '男', '2021-08-31 10:29:26', '2021-08-31 10:29:49', '高三9班', '2');
INSERT INTO `usertable` VALUES ('127', null, '孙悟空', '123456', 'cat.jpg', null, '福建龙岩', '男', '2021-08-31 10:29:28', '2021-08-31 10:29:46', '高二1班', '3');
INSERT INTO `usertable` VALUES ('128', null, '夏洛特', '123456', 'cat.jpg', null, '福建龙岩', '男', '2021-08-31 10:29:29', '2021-08-31 10:29:42', '高二5班', '3');
INSERT INTO `usertable` VALUES ('129', null, '夏侯惇', '123456', 'cat.jpg', null, '福建福州', '男', '2021-08-31 10:29:33', '2021-08-31 10:29:40', '高二4班', '2');
INSERT INTO `usertable` VALUES ('130', null, '武则天', '123456', 'cat.jpg', null, '福建龙岩', '男', '2021-08-31 10:29:36', '2021-08-31 10:29:38', '高二3班', '1');
