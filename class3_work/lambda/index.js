"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const addTodo_1 = require("./addTodo");
const getTodos_1 = require("./getTodos");
const updateTodo_1 = require("./updateTodo");
async function handler(event) {
    console.log('event => ', event);
    switch (event.info.fieldName) {
        case 'getTodos':
            console.log('gettodos => ', event.info.fieldName);
            return (0, getTodos_1.default)();
        case 'addTodo':
            console.log('addTodo => ', event.info.fieldName);
            return (0, addTodo_1.default)(event.arguments.todo); // input is because in schema we have set todo as input object whch contains all the arguments
        case 'updateTodo':
            console.log('updateTodo => ', event.info.fieldName);
            return (0, updateTodo_1.default)(event.arguments); // input is because in schema we have directly passed the arguments
        default:
            console.log('default ');
            return null;
    }
}
exports.handler = handler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1Q0FBZ0M7QUFDaEMseUNBQWtDO0FBQ2xDLDZDQUFzQztBQVcvQixLQUFLLFVBQVUsT0FBTyxDQUFFLEtBQWdDO0lBRTNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRWhDLFFBQVEsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUM7UUFFekIsS0FBSyxVQUFVO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNuRCxPQUFPLElBQUEsa0JBQVEsR0FBRSxDQUFDO1FBRXRCLEtBQUssU0FBUztZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEQsT0FBTyxJQUFBLGlCQUFPLEVBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDhGQUE4RjtRQUV4SSxLQUFLLFlBQVk7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsT0FBTyxJQUFBLG9CQUFVLEVBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsbUVBQW1FO1FBRTNHO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QixPQUFPLElBQUksQ0FBQztLQUVuQjtBQUNMLENBQUM7QUF2QkQsMEJBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZFRvZG8gZnJvbSBcIi4vYWRkVG9kb1wiO1xyXG5pbXBvcnQgZ2V0VG9kb3MgZnJvbSAnLi9nZXRUb2Rvcyc7XHJcbmltcG9ydCB1cGRhdGVUb2RvIGZyb20gXCIuL3VwZGF0ZVRvZG9cIjtcclxuXHJcblxyXG5leHBvcnQgdHlwZSBUb2RvID0ge1xyXG4gICAgaWQ6IHN0cmluZyxcclxuICAgIG5hbWUgOiBzdHJpbmcsXHJcbiAgICBkb25lIDogQm9vbGVhblxyXG59XHJcblxyXG5pbXBvcnQgeyBBcHBTeW5jUmVzb2x2ZXJFdmVudCB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlciggZXZlbnQ6IEFwcFN5bmNSZXNvbHZlckV2ZW50PGFueT4pe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdldmVudCA9PiAnLCBldmVudCk7XHJcblxyXG4gICAgc3dpdGNoIChldmVudC5pbmZvLmZpZWxkTmFtZSl7XHJcblxyXG4gICAgICAgIGNhc2UgJ2dldFRvZG9zJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2dldHRvZG9zID0+ICcgLCBldmVudC5pbmZvLmZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRUb2RvcygpO1xyXG5cclxuICAgICAgICBjYXNlICdhZGRUb2RvJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZFRvZG8gPT4gJyAsIGV2ZW50LmluZm8uZmllbGROYW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFkZFRvZG8oZXZlbnQuYXJndW1lbnRzLnRvZG8pOyAvLyBpbnB1dCBpcyBiZWNhdXNlIGluIHNjaGVtYSB3ZSBoYXZlIHNldCB0b2RvIGFzIGlucHV0IG9iamVjdCB3aGNoIGNvbnRhaW5zIGFsbCB0aGUgYXJndW1lbnRzXHJcblxyXG4gICAgICAgIGNhc2UgJ3VwZGF0ZVRvZG8nOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlVG9kbyA9PiAnICwgZXZlbnQuaW5mby5maWVsZE5hbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlVG9kbyhldmVudC5hcmd1bWVudHMpOyAvLyBpbnB1dCBpcyBiZWNhdXNlIGluIHNjaGVtYSB3ZSBoYXZlIGRpcmVjdGx5IHBhc3NlZCB0aGUgYXJndW1lbnRzXHJcblxyXG4gICAgICAgIGRlZmF1bHQgOiBcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQgJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgIH1cclxufSJdfQ==