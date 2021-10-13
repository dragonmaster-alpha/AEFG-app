## Usage

1. (Optional) Include the [Custom Elements with Built-in Extends polyfill](https://github.com/ungap/custom-elements-builtin) for Safari:

		<script src="https://unpkg.com/@ungap/custom-elements-builtin"></script>

2. Include the X-Frame-Bypass JS module:

		<script type="module" src="https://unpkg.com/x-frame-bypass"></script>

3. Insert the X-Frame-Bypass Custom Element:

		<iframe is="x-frame-bypass" src="https://example.org/"></iframe>
