const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Bullet,
		C3.Behaviors.wrap
	];
};
self.C3_JsPropNameTable = [
	{Bullet: 0},
	{Wrap: 0},
	{Sprite: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {}
}