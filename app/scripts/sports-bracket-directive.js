'use strict';

/**
 * Sports Bracket directive of the bracketApp
 */
angular.module('bracketApp')
  .directive('sportsBracket', function () {
	return {
		restrict: 'E',
		scope: {
		  bracket: '@'
		},
		templateUrl: '../views/sports-bracket.html',
		link: function(scope) {
			scope.$watch('bracket', function(value) {
				if(value) {
					// JSON value of the bracket
					var bracket = angular.fromJson(value);
					
					var tree = [];
					var list = [];
					var depth = 0;
				  
					// Function used to add a match to the tree
					var addToTree = function(match, i) {
						if(angular.isUndefined(tree[i])) {
							tree[i] = [];
						}
						
						delete match.children;
						tree[i].push(match);
					}
				  
					// Loop the top half of the bracket
					var loopTopTree = function(match, currLevel) {
						// If the match has children...
						if(match.hasOwnProperty('children')) {
							match.children.forEach(function(c) {
								// ... Loop through each of these
								loopTopTree(c, currLevel-1);
							});
						} else if(depth === 0) {
							// The first match with no children can set the depth
							depth = -currLevel;
						}
						
						// Add the match to the tree
						addToTree(match, depth+currLevel);
					};
					
					// Loop the bottom half of the bracket
					var loopBottomTree = function(match, currLevel) {
						// If the match has children...
						if(match.hasOwnProperty('children')) {
								// ... Loop through each of these
							match.children.forEach(function(c) {
								loopBottomTree(c, currLevel+1);
							});
						}
						
						// Add the match to the tree
						addToTree(match, depth+currLevel);
					};
					
					// Builds a list of the matches for the smaller screens
					var buildList = function(tree) {
						list = [];
						var i = depth;
						
						// Merge the i-th array of the tree with the depth-ith
						// as these are in the same round;
						while(i > 0) {
							list[depth-i] = tree[depth-i].concat(tree[depth+i]);
							i--;
						}
						list[depth] = tree[depth];
					}
				
					loopTopTree(bracket.children[0], -1);
					loopBottomTree(bracket.children[1], 1);
					
					delete bracket.children;
					tree[depth] = [];
					tree[depth].push(bracket);
					
					buildList(tree);
					
					scope.tree = tree;
					scope.list = list;
				}
			});
		
		}
	};
  });
